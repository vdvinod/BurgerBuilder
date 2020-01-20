import React from "react";

import Classes from "./Toolbar.css"; 
import Logo from "../../Logo/Logo";
const toolbar = (props) => (
    <header className={Classes.Toolbar}>
        <div>Menu</div>
        <Logo />
        <nav></nav>
    </header>
)

export default toolbar;