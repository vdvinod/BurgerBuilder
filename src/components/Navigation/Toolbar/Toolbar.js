import React from "react";

import Classes from "./Toolbar.css"; 
import Logo from "../../Logo/Logo";
import NavigationItems from "../NavigationItems/NavigationItems"
const toolbar = (props) => (
    <header className={Classes.Toolbar}>
        <div>Menu</div>
        <div className={Classes.Logo}>
            <Logo />
        </div>
        <nav className={Classes.DesktopOnly}>
            <NavigationItems/>
        </nav>
    </header>
)

export default toolbar;