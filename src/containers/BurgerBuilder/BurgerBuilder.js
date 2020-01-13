import React, {Component} from "react";
import Aux from "../../hoc/Aux";
import Burger from "../../components/Burger/Burger"
import BuildControls from "../../components/Burger/BuildControls/BuildControls";


const INGREDIENT_PRICE = {
    salad: 10,
    bacon: 20,
    cheese: 10,
    meat: 30
}
class BurgerBuilder extends Component {
    // constructor (props){
    //     super(props);
    //     this.state = {
            
    //     }
    // }

    state = {
        ingredients : {
            salad: 0,
            bacon: 0,
            cheese: 0,
            meat: 0
        },
        totalPrice: 50
    }

    addIngredientHandler = (type) => {
        const updatedState = {
            ...this.state.ingredients
        };
        updatedState[type] = updatedState[type] + 1;
        this.setState({
            totalPrice: this.state.totalPrice + INGREDIENT_PRICE[type] ,
            ingredients : updatedState
        });
       
    }

    removeIngredientHandler = (type) => {
        const updatedState = {
            ...this.state.ingredients
        };
        updatedState[type] = updatedState[type] - 1 >= 0 ? updatedState[type] - 1 : 0;
        this.setState({
            totalPrice: this.state.totalPrice + INGREDIENT_PRICE[type] ,
            ingredients : updatedState
        });
    }

    render () {
        return (
            <Aux>
               <Burger ingredients={this.state.ingredients}/>
               <BuildControls
                    ingredientAdded={this.addIngredientHandler}
                    ingredientDeleted={this.removeIngredientHandler}
               />
            </Aux>
            
        )
    }
}
export default BurgerBuilder;