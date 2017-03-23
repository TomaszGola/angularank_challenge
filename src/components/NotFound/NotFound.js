import React, {Component} from 'react';
import {Link} from "react-router";
import {Button, Panel, Grid} from 'react-bootstrap';

class NotFound extends Component {
  render() {

    const title = <h3>404 not found</h3>

    return (
      <Grid>
        <Panel
          header={title}
          bsStyle="warning">
          <p>Please Sign In and start the journey</p>
          <Link to="/login">
            <Button bsStyle="success">Sign in</Button>
          </Link>
        </Panel>
      </Grid>
    )
  }
}

export default NotFound;