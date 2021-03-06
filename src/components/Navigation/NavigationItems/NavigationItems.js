import React from 'react';
import classes from './NavigationItems.css';
import NavigationItem from './NavigationItem/NavigationItem';

const navigationitems = (props) => (
    <ul className={classes.NavigationItems}>
        <NavigationItem link="/" exact active>Burger Builder</NavigationItem>
        {props.isAuthenticated?<NavigationItem link="/orders" active>Orders</NavigationItem>:null}
        {!props.isAuthenticated ? <NavigationItem link="/auth">Authenticate</NavigationItem> :
        <NavigationItem link="/logout">Logout</NavigationItem>}
    </ul>
);

export default navigationitems;