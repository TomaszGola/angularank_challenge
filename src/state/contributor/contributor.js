import {
  FETCH_CONTR_S_REPOS__SUCCESS,
  FETCH_CONTR_S_REPOS__FAILURE
} from './actionTypes'


export const fetchContrS_Repos = (oneContr, auth) => {
  return (dispatch) => {
   fetch(oneContr.repos_url, auth)
     .then(
       resp => {
         if (resp.status === 200) {
           resp.json().then(
             contrS_rep =>
               dispatch(
                 {
                   type: FETCH_CONTR_S_REPOS__SUCCESS,
                   contrS_rep: contrS_rep
                 }),
           )
           console.log('udało się contrS repos')
         }
         else {
           console.log('wystąpił błąd w contrS repos')
         }
       }
     )
  }
}