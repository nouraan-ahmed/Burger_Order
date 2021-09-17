import React, { Component } from 'react';
import {connect} from 'react-redux';
import Aux from '../../hoc/Aux';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';
import Modal from '../../components/UI/Modal/Modal';
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary';
import Spinner from '../../components/UI/Spinner/Spinner';
import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler';
import * as actions from '../../store/actions/index';
import axios from '../../axios-orders';

class BurgerBuilder extends Component{

    state = {
        purchasing: false,
        loading:false,
        error:false
    }

    componentDidMount(){
        console.log(this.props);
        this.props.onInitIngredients();
    }

    updatePurchaseState (ingredients) {
        const sum = Object.keys(ingredients)
            .map(igKey => {
                return ingredients[igKey]
            })
            .reduce((sum, curr) => {
                return sum + curr;
            },0);
        return sum > 0
    }

    // addIngredientHandler = (type) => {
    //     const oldCount = this.state.ingredients[type];
    //     const updatedCount = oldCount + 1;
    //     const updatedIngredients = {
    //         ...this.state.ingredients
    //     };
    //     updatedIngredients[type] = updatedCount;
    //     const priceAddition = INGREGIENT_PRICES[type];
    //     const oldPrice = this.state.totalPrice;
    //     const newPrice = oldPrice + priceAddition;
    //     this.setState({
    //         ingredients: updatedIngredients,
    //         totalPrice: newPrice
    //     });
    //     this.updatePurchaseState(updatedIngredients);
    // }

    // removeIngredientHandler = (type) => {
    //     const oldCount = this.state.ingredients[type];
    //     if(oldCount<=0){
    //         return;
    //     }
    //     const updatedCount = oldCount - 1;
    //     const updatedIngredients = {
    //         ...this.state.ingredients
    //     };
    //     updatedIngredients[type] = updatedCount;
    //     const priceDeduction = INGREGIENT_PRICES[type];
    //     const oldPrice = this.state.totalPrice;
    //     const newPrice = oldPrice - priceDeduction;
    //     this.setState({
    //         ingredients: updatedIngredients,
    //         totalPrice: newPrice
    //     });
    //     this.updatePurchaseState(updatedIngredients);
    // }

    purchaseHandler = () => {
        if(this.props.isAuthenticated){
        this.setState({purchasing:true});
        }
        else{
            this.props.onSetAuthRedirectPath('/checkout');
            this.props.history.push('/auth');
        }
    }

    purchaseCancelHandler = () => {
        this.setState({purchasing:false});
    }
    
    purchaseContinueHandler = () => {

        // const queryParams = [];
        // for(let i in this.state.ingredients){
        //     queryParams.push(encodeURIComponent(i)+'='+encodeURIComponent(this.state.ingredients[i]));
        // }

        // queryParams.push('price=' + this.props.price);

        // const queryString = queryParams.join('&');

        this.props.onInitPurchase();

        this.props.history.push('/checkout');
    }

    render(){

        const disabledInfo = {
            ...this.props.ings
        };
        for (let key in disabledInfo) {
            disabledInfo[key] = disabledInfo[key] <= 0
        }

        let orderSummary=null;

        let burger = this.props.error? <p>Ingredients cannot be loaded</p>: <Spinner/>

        if(this.props.ings){
        burger = (
            <Aux>
                <Burger ingredients = {this.props.ings} />
                <BuildControls 
                    ingredientAdded = {this.props.onIngredientAdded}
                    ingredientRemoved = {this.props.onIngredientRemoved}
                    disabled = {disabledInfo} 
                    purchasable={this.updatePurchaseState(this.props.ings)}
                    price = {this.props.price}
                    isAuth= {this.props.isAuthenticated}
                    ordered = {this.purchaseHandler}/> 
            </Aux>
            );
        orderSummary = 
        <OrderSummary 
            ingredients={this.props.ings}
            purchaseCancelled={this.purchaseCancelHandler}
            purchaseContinue={this.purchaseContinueHandler}
            price = {this.props.price.toFixed(2)}/> ;
        }

        return(
            <Aux>
                <Modal 
                    show={this.state.purchasing} 
                        modalClosed={this.purchaseCancelHandler}>
                    {orderSummary}
                </Modal>
                {burger}
            </Aux>
        );
    }
}

const mapStateToProps = state => {
    return {
        ings: state.burgerBuilder.ingredients,
        price:state.burgerBuilder.totalPrice,
        error: state.burgerBuilder.error,
        isAuthenticated: state.auth.token!==null
    };
}

const mapDispatchToProps = dispatch => {
    return {
        onIngredientAdded: (ingName) => dispatch(actions.addIngredient(ingName)),
        onIngredientRemoved: (ingName) => dispatch(actions.removeIngredient(ingName)),
        onInitIngredients: () => dispatch(actions.initIngredients()),
        onInitPurchase: () => dispatch(actions.purchaseInit()),
        onSetAuthRedirectPath: (path) => dispatch(actions.setAuthRedirectPath(path))
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(withErrorHandler(BurgerBuilder,axios));