import React from 'react';
import classes from './burger.css';
import BurgerIngredient from './BurgerIngredient/BurgerIngredient';

const burger = (props) => {

    //convert object to an array
    let ingredientsArr = Object.keys(props.ingredients)
    .map(igKey => {
        return [...Array(props.ingredients[igKey])].map((_, i) => {
            return <BurgerIngredient key={igKey+i} type={igKey} />
        });
    })
    .reduce((prev, curr) => {
        return prev.concat(curr);
    },[]);

    if(ingredientsArr.length === 0){
        ingredientsArr = <p>Please Start Adding Ingredients</p>
    }

    return (
        <div className={classes.Burger}>
            <BurgerIngredient type="bread-top" />
            {ingredientsArr}
            <BurgerIngredient type="bread-bottom" />
        </div>
    );
};

export default burger;