// dependencies
import React, {Component} from "react";
// components
// images
import logo from "../../logo.svg";
// styles
import "./Home.css";

class App extends Component {
    render() {
        return (
            <div className="App">
                <div className="App-header">
                    <img src={logo} className="App-logo" alt="logo"/>
                    <h2>Welcome to Integration-With</h2>
                </div>
                <p className="App-intro">
                    This project is a compilation of the integration with several famous APIs. The target for the
                    integrations are :
                </p>
                <ul>
                    <li>Instagram : In progress</li>
                    <li>Spotify : TODO</li>
                    <li>GitHub : TODO</li>
                    <li>Twitter : TODO</li>
                    <li>LinkedIn : TODO</li>
                    <li>Facebook : TODO</li>
                </ul>
            </div>
        );
    }
}

export default App;
