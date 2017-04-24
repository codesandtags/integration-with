// dependencies
import React, {Component} from "react";
// components
// styles
import "./Home.css";

const config = {
    cssClasses: {
        root: 'iw-home'
    }
};

class Home extends Component {
    render() {
        return (
            <div className={config.cssClasses.root}>
                <p>
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

export default Home;
