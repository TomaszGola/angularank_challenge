import React, {Component} from 'react';
import {Link} from "react-router";
import { Button, ButtonToolbar, Row, Grid, Col, Well } from 'react-bootstrap';


class App extends Component {
  render() {
    return (
      <Well bsSize="large">
        <Grid>
          <Row>
            <Col xs={6}>
              <p>
                You have to sign in using your github account if you want to enter to this application.
                If you don't have account, you can use sign up button.
              </p>
            </Col>
            <Col xs={6}>
              <ButtonToolbar>
                <Link to="/login">
                  <Button bsStyle="success">Sign in</Button>
                </Link>
                {' '}
                <Button bsStyle="success" href="https://github.com/join" target="blank">
                  Sign up
                </Button>
              </ButtonToolbar>
            </Col>
          </Row>
        </Grid>
      </Well>
    );
  }
}

export default App;
