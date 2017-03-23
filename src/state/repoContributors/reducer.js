import {
  FETCH_REPO_CONTRIBUTORS__SUCCESS,
  FETCH_REPO_CONTRIBUTORS__FAILURE
} from './actionTypes'

const initialState = {
  repoContributors: []
}

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_REPO_CONTRIBUTORS__SUCCESS:
      return {
        ...state,
        repoContributors: action.repoContributors
      }
    case FETCH_REPO_CONTRIBUTORS__FAILURE:
      return {
        error: state.error.concat(action.error)
      }
    default:
      return state
  }
}