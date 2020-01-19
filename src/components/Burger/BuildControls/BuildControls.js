import React from "react";
import Classes from "./BuildControls.css";
import BuildControl from "./BuildControl/BuildControl"
const controls = [
    { label: 'Salad', type: 'salad'},
    { label: 'Bacon', type: 'bacon'},
    { label: 'Cheese', type: 'cheese'},
    { label: 'Meat', type: 'meat'},
];
const BuildControls = (props)=> (
    
    <div className={Classes.BuildControls}>
        <p>Current Price: <strong>{props.totalPrice.toFixed(2)} &#8377;	</strong></p>
        {controls.type}
        {controls.map((ctrl)=>(
            <BuildControl 
                key={ctrl.label} 
                label={ctrl.label}
                added={()=>props.ingredientAdded(ctrl.type)}
                removed={()=>props.ingredientDeleted(ctrl.type)}
            />
        ))}
        <button 
            className={Classes.OrderButton}
            disabled={!props.purchasable}
            onClick={props.ordered}>Order Now</button>
    </div>
)
export default BuildControls;