import React from "react";
import Classes from "./Button.css";
const backDrop = (props) => (
    <button
        className={[Classes.Button, Classes[props.btnType]].join(' ')}
        onClick={props.clicked}
    >{props.children}</button>
)

export default backDrop;