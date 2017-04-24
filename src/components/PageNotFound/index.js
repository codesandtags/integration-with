// Dependencies
import React from "react";
// Styles
import "./PageNotFound.css";

const config = {
    cssClasses: {
        root: 'iw-404'
    }
};

const PagetNotFound = () => (
    <div className={config.cssClasses.root}>
        <h1>Hi, my friend!</h1>
        <p>The page that you are looking for, does not exists.</p>
    </div>
);

export default PagetNotFound;