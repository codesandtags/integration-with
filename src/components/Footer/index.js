// Dependencies
import React from "react";
// Styles
import "./Footer.css";

const config = {
    cssClasses: {
        root: 'iw-footer'
    }
};

const Footer = () => (
    <footer className={config.cssClasses.root}>
        This is Sparta! &copy; 2017
    </footer>
);

export default Footer;