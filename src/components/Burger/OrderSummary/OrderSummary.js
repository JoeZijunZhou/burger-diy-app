import React from 'react';

import Aux from '../../../hoc/Auxi';
import Button from '../../UI/Button/Button';

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
            <p><strong>Total Price: {props.price.toFixed(2)}</strong></p>
            <p>Continue to Checkout?</p>
            <Button btnType="Danger" clicked={props.purchaseCancelled}>CANCEL</Button>
            <Button btnType="Success" clicked={props.purchaseContinued}>CONTINUE</Button>
        </Aux>
    );
};

export default orderSummary;