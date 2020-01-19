import React from "react";
import Classes from "./modal.css";
const model = (props) => (
    <div className={Classes.Modal}
        style={{
            transform: props.show ? "translateY(0)" : "translateY(-100vh)",
            opacity: props.show ? '1' : '0'
        }}
    >
        {props.children}
    </div>
);

export default model;