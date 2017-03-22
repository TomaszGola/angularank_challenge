import React, {Component} from 'react'
import {connect} from 'react-redux'

import {fetchReposContributors} from '../../state/repoContributors/repoContributors'

import SignIn from '../SignIn/SignIn';

const mapStateToProps = state => ({
  auth: state.userDate.auth,
  logInSuccess: state.userDate.logInSuccess,
  contrS_rep: state.contrS_repos.contrS_rep,
  repoContributors: state.repoContr.repoContributors
})

const mapDispatchToProps = dispatch => ({
  fetchReposContributors: (oneRepo, auth) => dispatch(fetchReposContributors(oneRepo, auth))
})

class RepoContributors extends Component {
  constructor(){
    super()

    this.state = {
      oneRepo: null
    }

    this.functionRepo = () => {
     const oneRepo = this.props.contrS_rep.find(one =>
     one.name === this.props.params.repoName);
     this.setState({oneRepo:oneRepo})
      this.props.fetchReposContributors(oneRepo, this.props.auth)
    }
  }

  componentWillMount(){
    this.functionRepo()
  }

  render() {
    return(
      <div>
        {
          this.props.logInSuccess ?
            <div>
              <p>{this.state.oneRepo.name}</p>
              {
                this.props.repoContributors.map(
                  oneRepoContr=>
                  <li key={oneRepoContr.id}>
                    {oneRepoContr.login}
                  </li>
                )
              }
            </div>:
            <div>
              <p>to see list you have to log in</p>
              <SignIn/>
            </div>
        }
      </div>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(RepoContributors)