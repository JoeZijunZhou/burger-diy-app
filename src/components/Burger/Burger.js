import React from 'react';

import classes from './Burger.css';
import BurgerIngredient from './BurgerIngredient/BurgerIngredient';

const burger = (props) => {
    //obj =trans> array
    let transformedIngredients = Object.keys(props.ingredients)
        .map(igKey => {
            return [...Array(props.ingredients[igKey])].map((_, i) => {
                //mapping ingredients
                return <BurgerIngredient key={igKey + i} type={igKey}/>;   
            });
        })
        .reduce((arr, el) => {
            return arr.concat(el)
        }, []);
    //if no ingredients// start 
    if (transformedIngredients.length === 0) {
        transformedIngredients = <p>plz start adding ingredients!</p>
    }
    
    return (
        <div className={classes.Burger}>
            <BurgerIngredient type="bread-top"/>
            {transformedIngredients}
            <BurgerIngredient type="bread-bottom"/>
        </div>
    );
};

export default burger;