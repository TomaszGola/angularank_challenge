import {
  FETCH_ANG_REP__SUCCESS,
  FETCH_ANG_REP__FAILURE,
  FETCH_REP_IN_ANG__SUCCESS,
  FETCH_REP_IN_ANG__FAILURE,
  FETCH_CONT__SUCCESS,
  FETCH_CONT__FAILURE
} from './actionTypes'


const fetchRepos = (repos, auth) => {
  return (dispatch) => {
  repos.map(name =>
    fetch(name.contributors_url, auth)
      .then(
      resp => {
        if (resp.status === 200)
        {
          resp.json().then(
            repInAng =>
              dispatch(
                {
                  type: FETCH_REP_IN_ANG__SUCCESS,
                  repInAng: repInAng
                }),
          )
          console.log('udało się rep in ang')
        }
        else {
          console.log('wystąpił błąd w rep in ang')
        }}
    )
  )
}
}

export const fetchAngularRep = (auth) => {
  return (dispatch) => {

    fetch('https://api.github.com/orgs/angular/repos', auth)
      .then(
        resp => {
         if (resp.status === 200)
            {
              resp.json().then(
                repos =>
                  dispatch(
                    fetchRepos(repos, auth),
                    {
                  type: FETCH_ANG_REP__SUCCESS,
                  anguRepos: repos
                }),
              )
              console.log('udało się')
            }
            else {
            console.log('wystąpił błąd')
        }}
      )
  }
};
