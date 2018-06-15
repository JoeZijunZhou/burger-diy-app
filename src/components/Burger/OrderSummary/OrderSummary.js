import React from 'react';

import Aux from '../../../hoc/Auxi';

const orderSummary = (props) => {
    const ingredientSummary = Object.keys(props.ingredients)
        .map(igKey => {
            return ( 
            <li key={igKey}>
                <span sytle={{textTransform: 'capitalize'}}>
                    {igKey}</span>: {props.ingredients[igKey]}
            </li>);
        });

    return (
        <Aux>
            <h3>Your Order</h3>
            <p>A deli burger with the follwing ingredients:</p>
            <ul>
                {ingredientSummary}
            </ul>
            <p>Continue to Checkout?</p>
        </Aux>
    );
};

export default orderSummary;