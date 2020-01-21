import React from "react";

import Classes from "./NavigationItems.css";
import NavigationItem from "./NavigatioItem/NavigatioItem.js";
const navigationItems = (props) => (
    <ul className={Classes.navigationItems}>
        <NavigationItem link="/">Burger Builder</NavigationItem>
        <NavigationItem link="/">CheckOut</NavigationItem>

    </ul>
)

export default navigationItems;