// dependencies
import React, {Component} from "react";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
// components
import Home from "../Home";
// images
// styles
import "./App.css";

class App extends Component {
    render() {
        return (
            <Router>
                <Switch>
                    <Route exact path="/" component={Home}/>
                    <Route render={() => (
                        <h2>404 - Page not found</h2>
                    )}/>
                </Switch>
            </Router>
        );
    }
}

export default App;
