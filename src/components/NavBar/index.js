// Dependencies
import React from "react";
// Styles
import "./NavBar.css";

const config = {
    cssClasses: {
        root: 'iw-navbar'
    }
};

const NavBar = () => (
    <nav className={config.cssClasses.root}>
        <ul>
            <li>Uno</li>
            <li>Two</li>
            <li>Three</li>
        </ul>
    </nav>
);

export default NavBar;