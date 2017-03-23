import {
  FETCH_ANG_REP__SUCCESS,
  FETCH_ANG_REP__FAILURE,
  FETCH_REP_IN_ANG__SUCCESS,
  FETCH_REP_IN_ANG__FAILURE,
  FETCH_CONT__SUCCESS,
  FETCH_CONT__FAILURE,
  DELETE_REPET
} from './actionTypes'

const fetchContr = (repInAng, auth) => {
  return (dispatch) => {
    repInAng.map(contr =>
      fetch(contr.url, auth)
        .then(
          resp => {
            if (resp.status === 200) {
              resp.json().then(
                contr =>
                  dispatch(
                    {
                      type: FETCH_CONT__SUCCESS,
                      contr: contr
                    }
                  ),
              )
            }
            else {
              dispatch(
                {
                  type: FETCH_CONT__FAILURE,
                  error: resp
                }
              )
            }
          }
        )
    )
  }
}

const fetchRepos = (repos, auth) => {
  return (dispatch) => {
    repos.map(name =>
      fetch(name.contributors_url, auth)
        .then(
          resp => {
            if (resp.status === 200) {
              resp.json().then(
                repInAng =>
                  dispatch(
                    fetchContr(repInAng, auth),
                    {
                      type: FETCH_REP_IN_ANG__SUCCESS,
                      repInAng: repInAng
                    }
                  ),
              )
            }
            else {
              dispatch(
                {
                  type: FETCH_REP_IN_ANG__FAILURE,
                  error: resp
                }
              )
            }
          }
        )
    )
  }
}

export const fetchAngularRep = (auth) => {
  return (dispatch) => {

    fetch('https://api.github.com/orgs/angular/repos', auth)
      .then(
        resp => {
          if (resp.status === 200) {
            resp.json().then(
              repos =>
                dispatch(
                  fetchRepos(repos, auth),
                  {
                    type: FETCH_ANG_REP__SUCCESS,
                    anguRepos: repos
                  }
                ),
            )
          }
          else {
            dispatch(
              {
                type: FETCH_ANG_REP__FAILURE,
                error: resp
              }
            )
          }
        }
      )
  }
};

export const deleteRepetitions = (contr) => {
  return (dispatch) => {
    contr.sort((a, b) => a.login.localeCompare(b.login))
    contr.map(one => one.count = 1)
    for (let i = 2; i < contr.length;) {
      if (contr[i - 1].login === contr[i].login) {
        contr[i].count = contr[i - 1].count + 1
        contr.splice(i - 1, 1)
      } else {
        i += 1
      }
    }
    dispatch({
      type: DELETE_REPET,
      deleted: contr
    })
  }
}