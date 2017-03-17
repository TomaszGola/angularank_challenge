import { compose, createStore, combineReducers, applyMiddleware } from 'redux'
import thunkMiddleware from 'redux-thunk'

import userDateReducer from './state/signIn/reducer.js'

const reducer = combineReducers({
  userDate: userDateReducer
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const enhancer = composeEnhancers(
  applyMiddleware(
    thunkMiddleware
  )
)

const store = createStore(reducer, enhancer);

export default store
