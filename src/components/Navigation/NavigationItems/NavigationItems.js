import React from "react";

import Classes from "./NavigationItems.css";
import NavigationItem from "../NavigationItems/NavigationItem/NavigationItem";
const navigationItems = (props) => (
    <ul className={Classes.NavigationItems}>
        <NavigationItem link="/">Burger Builder</NavigationItem>
        <NavigationItem link="/">CheckOut</NavigationItem>

    </ul>
)

export default navigationItems;