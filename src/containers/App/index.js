// dependencies
import React, {Component} from "react";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
// components
import Home from "../../components/Home";
import Header from "../../components/Header";
import PageNotFound from "../../components/PageNotFound";
// styles
import "./App.css";

const config = {
    cssClasses: {
        root: 'iw-app'
    }
};

class App extends Component {
    render() {
        return (
            <Router>
                <div className={config.cssClasses.root}>
                    <Header />
                    <Switch>
                        <Route exact path="/" component={Home}/>
                        <Route component={PageNotFound}/>
                    </Switch>
                </div>
            </Router>
        );
    }
}

export default App;
