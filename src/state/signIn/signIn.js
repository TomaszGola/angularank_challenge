import {
  FETCH_SIGNIN__SUCCESS,
  FETCH_SIGNIN__FAILURE
} from './actionTypes'

export const signIn = (username, password) => {
  return (dispatch) => {

    const auth = window.btoa(username + ':' + password)

    const init = {
      'method':'GET',
      'headers': {
        'authorization': 'Basic ' + auth
      }
    }

    fetch('https://api.github.com/user', init)
      .then(
        resp => {
          if (resp.status === 200) {
            resp.json().then(user =>
            dispatch({
              type:FETCH_SIGNIN__SUCCESS,
              auth: init,
              userInfo: user
            })
            )
          }
          else {
            resp.json().then(err =>
              dispatch({
                type:FETCH_SIGNIN__FAILURE,
                error: err
              })
            )
          }
        }
      )
  }
}

