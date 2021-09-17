import React,{Component} from 'react';
import {connect} from 'react-redux';

import Aux from '../../hoc/Aux';
import classes from './Layout.css';
import Toolbar from '../Navigation/Toolbar/Toolbar';
import SideDrawer from '../Navigation/SideDrawer/SideDrawer';

class Layout extends Component {

    state = {
        showSideDrawer:true,
    }

    SideDrawerClosedHandler = () => {
        this.setState({showSideDrawer:false});
    }
    SideDrawerToggleHandler = () => {
        //Due to async nature of set state this will not work properly so we need to use prevstate
        //this.setState({showSideDrawer:! this.state.showSideDrawer});
        this.setState((prevState) => {
            return { showSideDrawer: ! prevState.showSideDrawer};
        });
    }

    render(){
        return (
        <Aux>
        <Toolbar 
            isAuth = {this.props.isAuthenticated}
            drawerToggleClicked={this.SideDrawerToggleHandler}/>
        <SideDrawer 
            open={this.state.showSideDrawer} 
            closed={this.SideDrawerClosedHandler} />
        <main className={classes.Content}>
            {this.props.children}
        </main>
        </Aux>
        )
    }
}

const mapStateToProps = state =>{
    return{
        isAuthenticated: state.auth.token !== null
    };
};

export default connect(mapStateToProps)(Layout);
