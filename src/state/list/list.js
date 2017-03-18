import {
  FETCH_ANG_REP__SUCCESS,
  FETCH_ANG_REP__FAILURE,
  FETCH_REP_IN_ANG__SUCCESS,
  FETCH_REP_IN_ANG__FAILURE,
  FETCH_CONT__SUCCESS,
  FETCH_CONT__FAILURE
} from './actionTypes'

export const fetchAngularRep = (auth) => {
  return (dispatch) => {

    fetch('https://api.github.com/orgs/angular/repos', auth)
      .then(
        resp => {
          resp.status === 200 ?
            console.log('udało się') :
            console.log('wystąpił błąd')
        }
      )
  }
};

