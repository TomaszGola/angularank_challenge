import React, { Component } from 'react';
import {Link} from "react-router";
import {Button} from 'react-bootstrap';

import './App.css';

class App extends Component {
  render() {
    return (

      <div className="App">
        <p>You have to log using your github account if you want to enter to this application</p>
        <br/>
        <Link to="/login">
        <Button bsStyle="success">Sign in</Button>
        </Link>
        <a href="https://github.com/join">
          <Button bsStyle="danger">Sign up</Button>
        </a>
      </div>
    );
  }
}

export default App;