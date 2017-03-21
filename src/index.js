import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, browserHistory} from 'react-router'
import {Provider} from 'react-redux';

import store from './store';

import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/css/bootstrap-theme.css";

import App from './components/App/App';
import SignIn from './components/SignIn/SignIn';
import AuthList from './components/AuthList/AuthList';
import NotFound from './components/NotFound/NotFound';
import Contributor from './components/Contributor/Contributor'


import './index.css';

ReactDOM.render(
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path="/" component={App}/>
      <Route path="/login" component={SignIn}/>
      <Route path="/list" component={AuthList}/>
      <Route path="/list/:contr" component={Contributor}/>
      <Route path="*" component={NotFound}/>
    </Router>
  </Provider>
  ,
  document.getElementById('root')
);
