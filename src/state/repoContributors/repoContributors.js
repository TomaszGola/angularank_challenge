import {
  FETCH_REPO_CONTRIBUTORS__SUCCESS,
  FETCH_REPO_CONTRIBUTORS__FAILURE
} from './actionTypes'

export const fetchReposContributors = (repo, auth) => {
  return (dispatch) => {
    fetch(repo.contributors_url, auth)
      .then(
        resp => {
          if (resp.status === 200) {
            resp.json().then(
              repoContributors =>
                dispatch(
                  {
                    type: FETCH_REPO_CONTRIBUTORS__SUCCESS,
                    repoContributors: repoContributors
                  }),
            )
            console.log('udało się repo contributors')
          }
          else {
            console.log('wystąpił błąd w repo contributors')
          }
        }
      )
  }
}