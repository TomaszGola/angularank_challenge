import React, {Component} from 'react'
import {connect} from 'react-redux'

import SignIn from '../SignIn/SignIn';

const mapStateToProps = state => ({
  auth: state.userDate.auth,
  logInSuccess: state.userDate.logInSuccess,
  contrS_rep: state.contrS_repos.contrS_rep
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

export default connect(mapStateToProps, null)(RepoContributors)