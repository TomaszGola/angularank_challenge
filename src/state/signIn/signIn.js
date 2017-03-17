export const signIn = (username, password) => {
  return (dispatch) => {
    const auth = window.btoa(username + ':' + password)
    console.log(auth)

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
            console.log('udalo sie')
          }
          else {
            console.log('nie udalo sie')
          }
        }
      )

  }
}

