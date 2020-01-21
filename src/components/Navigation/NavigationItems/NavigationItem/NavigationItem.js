import React from "reac"

import Classes from "./NavigationItem.css";

const navigationItem = (props) => (
    <li className={Classes.navigationItem}>
        <a 
            href={props.link} 
            className={props.active ? Classes.active : null}>{props.children}</a>
    </li>
)

export default navigationItem;