import React, {Component} from "react";
import Aux from "../../hoc/Aux";
import Burger from "../../components/Burger/Burger";
import BuildControls from "../../components/Burger/BuildControls/BuildControls";
import Model from "../../components/UI/modal/modal";
import OrderSummary from "../../components/Burger/orderSummary/orderSummary"

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
        totalPrice: 50,
        purchasable: false,
        purchasing: false
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
       this.updatePurchaseState(updatedState);
    }

    updatePurchaseState = (ingredients)=>{
        
        const sum = Object.keys(ingredients)
        .map( igKey => {
            return ingredients[igKey];
        })
        .reduce((sum, el) => {
            return sum + el;
        }, 0);
        this.setState({purchasable: sum > 0});
    }

    purchaseHandler = () =>{
        this.setState({purchasing:true});
    }

    removeIngredientHandler = (type) => {
        if(this.state.ingredients[type] <= 0){
            return false;
        }
        const updatedState = {
            ...this.state.ingredients
        };
        updatedState[type] = updatedState[type] - 1 >= 0 ? updatedState[type] - 1 : 0;
        this.setState({
            totalPrice: this.state.totalPrice > 50 ? this.state.totalPrice - INGREDIENT_PRICE[type] : 50,
            ingredients : updatedState
        });
        this.updatePurchaseState(updatedState);
    }

    render () {
        return (
            <Aux>
                <Model show={this.state.purchasing}>
                    <OrderSummary ingredients={this.state.ingredients}/>
                </Model>
               <Burger ingredients={this.state.ingredients}/>
               <BuildControls
                    ingredientAdded={this.addIngredientHandler}
                    ingredientDeleted={this.removeIngredientHandler}
                    purchasable={this.state.purchasable}
                    totalPrice={this.state.totalPrice}
                    ordered={this.purchaseHandler}
                    
               />
            </Aux>
            
        )
    }
}
export default BurgerBuilder;