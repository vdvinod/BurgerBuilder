import React from "react";
import Classes from "./Logo.css"
import burgerLogo from "../../assets/images/burger-logo.png"
const logo = (props) => (
   <div className={Classes.Logo}>
       <img src={burgerLogo} alt="my Logo"/>
   </div>
)

export default logo;