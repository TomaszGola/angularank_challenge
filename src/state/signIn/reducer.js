const initialState = {
  userDate: {}
}

export default (state = initialState, action ) => {
  switch (action.type) {
    case 'STORE_USER_DATE':
      return {
        username: action.username,
        password: action.password
      }
    default : return state
  }
}