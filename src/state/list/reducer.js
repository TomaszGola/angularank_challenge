import {
  FETCH_ANG_REP__SUCCESS,
  FETCH_ANG_REP__FAILURE,
  FETCH_REP_IN_ANG__SUCCESS,
  FETCH_REP_IN_ANG__FAILURE,
  FETCH_CONT__SUCCESS,
  FETCH_CONT__FAILURE,
  DELETE_REPET
} from './actionTypes'

const initialState = {
  anguRepos: null,
  repInAng: [],
  contr: [],
  countCont: 0,
  deleted: [],
  error: [],
}

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_ANG_REP__SUCCESS:
      return {
        anguRepos: action.anguRepos
      }
    case FETCH_ANG_REP__FAILURE:
      return {
        error: state.error.concat(action.error)
      }
    case FETCH_REP_IN_ANG__SUCCESS:
      return {
        repInAng: state.repInAng.concat(action.repInAng)
      }
    case FETCH_REP_IN_ANG__FAILURE:
      return {
        error: state.error.concat(action.error)
      }
    case FETCH_CONT__SUCCESS:
      return {
        contr: state.contr.concat(action.contr),
        countCont: state.countCont + 1
      }
    case FETCH_CONT__FAILURE:
      return {
        error: state.error.concat(action.error)
      }
    case DELETE_REPET:
      return {
        ...state,
        deleted: state.contr
      }
    default :
      return state
  }
}