import React, { Component } from 'react';
import {Link} from "react-router";
import {Button, ButtonToolbar} from 'react-bootstrap';

import './App.css';

class App extends Component {
  render() {
    return (

      <div className="App">
        <p>You have to log using your github account if you want to enter to this application</p>
        <br/>
        <ButtonToolbar>
        <Link to="/login">
         <Button bsStyle="success">Sign in</Button>
        </Link>
          {' '}
        <a href="https://github.com/join">
          <Button bsStyle="success">Sign up</Button>
        </a>
        </ButtonToolbar>
      </div>
    );
  }
}

export default App;
