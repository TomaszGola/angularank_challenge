import {
  FETCH_CONTR_S_REPOS__SUCCESS,
  FETCH_CONTR_S_REPOS__FAILURE
} from './actionTypes'

const initialState = {
  contrS_rep: [],
  error: []
}

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_CONTR_S_REPOS__SUCCESS:
      return {
        ...state,
        contrS_rep: action.contrS_rep
      }
    case FETCH_CONTR_S_REPOS__FAILURE:
      return {
        error: state.error.concat(action.error)
      }
    default :
      return state
  }
}
