// dependencies
import React, {Component} from "react";
import {Link} from "react-router-dom";
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
          <li><Link to="/instagram">Instagram</Link></li>
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
