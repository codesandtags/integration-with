// Dependencies
import React from "react";
import {Link} from "react-router-dom";
// Styles
import "./Header.css";
// images
import logo from "../../images/logo.svg";

const config = {
    cssClasses: {
        root: 'iw-header',
        logo: 'iw-logo'
    }
};

const Header = () => (
    <header className={config.cssClasses.root}>
        <h1><Link to="/"><img src={logo} className={config.cssClasses.logo} alt="logo"/> Integration With</Link></h1>
    </header>
);

export default Header;