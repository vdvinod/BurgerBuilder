import React from "react";

import Classes from "./SideDrawer.css"; 

import Logo from "../../Logo/Logo";
import NavigationItems from "../NavigationItems/NavigationItems.js"
const sideDrawer = (props) => {
    return (
        <div className={Classes.SideDrawer}>
        <div className={Classes.Logo}>
            <Logo />
        </div>
            <nav>
                <NavigationItems />
            </nav>
        </div>
    )
}

export default sideDrawer;