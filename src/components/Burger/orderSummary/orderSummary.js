import React from "react";

import Aux from "../../../hoc/Aux";
import Button from "../../UI/Button/Button";
const orderSummary = (props)=> {
    const ingredientSummary = Object.keys(props.ingredients)
        .map(igKey => {
            return (
            <li>
                <span style={{textTransform: "capitalize"}}>{igKey}</span> : {props.ingredients[igKey]} 
            </li>
            )
        });
   return  (
   <Aux>
        <h3>your order</h3>
        <p>A delecious Burger with the following ingredients:</p>
        <ul>
            {ingredientSummary}
        </ul>
        <p><strong>Total Price: {props.totalPrice} </strong></p>
        <p>Continue to checkout?</p>
        <Button btnType="Danger" clicked={props.purchaseCancelled}>CANCEL</Button>
        <Button btnType="Success" clicked={props.purchaseContinued}>CONTINUE</Button>
    </Aux>)
}

export default orderSummary;