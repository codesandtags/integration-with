// dependencies
import React, {Component} from "react";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
// containers
import Instagram from "../Instagram";
// components
import Home from "../../components/Home";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
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
                        <Route exact path="/instagram" component={Instagram}/>
                        <Route component={PageNotFound}/>
                    </Switch>
                    <Footer />
                </div>
            </Router>
        );
    }
}

export default App;
