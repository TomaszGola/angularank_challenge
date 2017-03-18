import {
  FETCH_ANG_REP__SUCCESS,
  FETCH_ANG_REP__FAILURE,
  FETCH_REP_IN_ANG__SUCCESS,
  FETCH_REP_IN_ANG__FAILURE,
  FETCH_CONT__SUCCESS,
  FETCH_CONT__FAILURE
} from './actionTypes'

const initialState = {
  anguRepos: null
}

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_ANG_REP__SUCCESS:
      return {
        anguRepos: action.anguRepos
      }
    case FETCH_ANG_REP__FAILURE:
      return {}
    case FETCH_REP_IN_ANG__SUCCESS:
      return {}
    case FETCH_REP_IN_ANG__FAILURE:
      return {}
    case FETCH_CONT__SUCCESS:
      return {}
    case FETCH_CONT__FAILURE:
      return {}
    default :
      return state
  }
}