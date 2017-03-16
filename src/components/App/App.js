import React, { Component } from 'react';
import {Button} from 'react-bootstrap';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <p>You have to log using your github account if you want to enter to this application</p>
        <br/>
        <Button>Sign in</Button>

        <a href="https://github.com/join">
          <Button>Sign in</Button>
        </a>
      </div>
    );
  }
}

export default App;
