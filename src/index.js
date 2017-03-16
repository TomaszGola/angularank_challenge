import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, browserHistory} from 'react-router'

import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/css/bootstrap-theme.css";

import App from './components/App/App';
import SignIn from './components/SignIn/SignIn';
import NotFound from './components/NotFound/NotFound'

import './index.css';

ReactDOM.render(
  <Router history={browserHistory}>
    <Route path="/" component={App}/>
    <Route path="/login" component={SignIn}/>
    <Route path="*" component={NotFound}/>
  </Router>

  ,
  document.getElementById('root')
);
