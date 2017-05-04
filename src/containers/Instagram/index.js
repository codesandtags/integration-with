// Dependencies
import React from "react";
import {Button, Grid, Icon} from "semantic-ui-react";
import axios from "axios";
// Styles
import "./Instagram.css";

class Instagram extends React.Component {

  constructor(props) {
    super(props);

    this.verifyUserLogged = this.verifyUserLogged.bind(this);
  }

  componentDidMount() {
    this.verifyUserLogged();
  }

  verifyUserLogged() {
    axios.get('http://localhost:9000/api/instagram/user')
      .then((data) => {
        console.log(data);
      });
  }


  render() {
    return (
      <div className="iw-instagram">
        <Grid celled>
          <Grid.Row>
            <Grid.Column width={16}>
              <h1>Instagram</h1>
            </Grid.Column>
          </Grid.Row>

          <Grid.Row>
            <Grid.Column width={16} textAlign="center">
              <a href="http://localhost:9000/api/instagram">
                <Button color='instagram'>
                  <Icon name='instagram'/> Sign In Instagram
                </Button>
              </a>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </div>
    )
  }
}
;

export default Instagram;
