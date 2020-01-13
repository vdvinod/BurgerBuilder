import React from "react";
import classes from "./burger.css";
import BurgerIngredient from "./BurgerIngredient/BurgerIngredient";
const burger = (props) => {
    let transformedIngredient = Object.keys(props.ingredients)
        .map(ingkey => {
            return [...Array(props.ingredients[ingkey])].map((_, i)=>{
                return <BurgerIngredient key={ingkey + i} type={ingkey}/>
            })
        })
        .reduce((arr, ele)=>{
            return arr.concat(ele);
        }, []);
        if(transformedIngredient.length === 0){
            transformedIngredient = <p>Please start adding ingredients!</p>
        }
    return (
        <div className={classes.Burger}>
            <BurgerIngredient type="bread-top"/>
            {transformedIngredient}
            <BurgerIngredient type="bread-bottom"/>
        </div>
    );
}

export default burger;