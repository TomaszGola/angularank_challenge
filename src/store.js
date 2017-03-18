import { compose, createStore, combineReducers, applyMiddleware } from 'redux'
import thunkMiddleware from 'redux-thunk'

import userDateReducer from './state/signIn/reducer.js'
import angReposReducer from './state/list/reducer.js'

const reducer = combineReducers({
  userDate: userDateReducer,
  angRepo: angReposReducer
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const enhancer = composeEnhancers(
  applyMiddleware(
    thunkMiddleware
  )
)

const store = createStore(reducer, enhancer);

export default store
