import {
  FETCH_SIGNIN__SUCCESS,
  FETCH_SIGNIN__FAILURE,
  SIGN_OUT
} from './actionTypes'

const initialState = {
  username: null,
  password: null,
  logInSuccess: null,
  auth: null,
  userInfo: null,
  error: null
}

export default (state = initialState, action ) => {
  switch (action.type) {
    case 'STORE_USER_DATE':
      return {
        username: action.username,
        password: action.password
      }
    case SIGN_OUT:
      return {
        ...state,
        username: null,
        password: null,
        logInSuccess: null,
        auth: null,
        userInfo: null,
        error: null
      }
    case FETCH_SIGNIN__SUCCESS:
      return{
        ...state,
        logInSuccess: true,
        userInfo: action.userInfo,
        auth: action.auth
      }
    case FETCH_SIGNIN__FAILURE:
      return{
        ...state,
        logInSuccess: false,
        error: action.error
      }
    default : return state
  }
}