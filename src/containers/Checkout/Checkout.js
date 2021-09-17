import React, { Component } from 'react';
import {Route, Redirect} from 'react-router-dom';
import CheckoutSummary from '../../components/Order/CheckoutSummary/CheckoutSummary';
import {connect} from 'react-redux';
import ContactData from './ContactData/ContactData';
import * as actions from '../../store/actions/index';

class Checkout extends Component {

    // componentWillMount() {
    //     const query = new URLSearchParams(this.props.location.search);
    //     const ingredients = {};
    //     let price =0;
    //     for(let param of query.entries()){
    //         //['salad', '1']
    //         if(param[0]==='price'){
    //             price=param[1];
    //         }else{
    //             ingredients[param[0]] = +param[1];
    //         }
    //     }
    //     this.setState({
    //         ingredients:ingredients,
    //         totalPrice: price
    //     });
    // }


    chekoutCancelled = () => {
        this.props.history.goBack();
    }

    checkoutContinued = () => {
        this.props.history.replace('/checkout/contact-data');
    }

    render() {
        let summary = <Redirect to="/" />
        if(this.props.ings){
            console.log(this.props.purchased);
            const purchaseRedirect = this.props.purchased ? <Redirect to ="/"/> : null ;
            summary = (
                <div>
                    {purchaseRedirect}
                    <CheckoutSummary 
                    ingredients={this.props.ings}
                    chekoutCancelled={this.checkoutCancelled}
                    checkoutContinued={this.checkoutContinued}/>
                    <Route 
                    path={this.props.match.path + '/contact-data'} 
                    // render={(props)=> <ContactData ingredients={this.state.ingredients} price={this.state.totalPrice} {...props} />} 
                    component={ContactData} />
                </div>
            );
            
        }
        return summary;
    }
}

const mapStateToProps = state => {
    return {
        ings: state.burgerBuilder.ingredients,
        purchased: state.order.purchased
    }
};

const mapDispatchToProps = dispatch => {
    return{
        onInitPurchase: () => dispatch(actions.purchaseInit())
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Checkout);