import React from "react";
import PropTypes from "prop-types";
import Classes from "./BurgerIngredient.css";

const burgerIngredient = ( props ) => {
    let ingredient = null;

    switch(props.type) {
        case 'bread-bottom' :
            ingredient = <div className={Classes.BreadBottom}></div>;
            break;
        case 'bread-top' :
            ingredient = <div className={Classes.BreadTop}>
                <div className={Classes.Seeds1}></div>
                <div className={Classes.Seeds2}></div>
            </div>
            break;
        case 'meat' :
            ingredient = <div className={Classes.Meat}></div>
            break;
        case 'cheese' :
            ingredient = <div className={Classes.Cheese}></div>
            break;
        case 'salad' :
            ingredient = <div className={Classes.Salad}></div>
            break;
        case 'bacon' :
            ingredient = <div className={Classes.Bacon}></div>
            break;
        default : 
            ingredient = null;
        
    }       
    return ingredient;
}

burgerIngredient.PropTypes = {
    type : PropTypes.string.isRequired
}

export default burgerIngredient;