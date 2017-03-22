import React, {Component} from 'react';
import {connect} from "react-redux";
import {Link} from "react-router";
import {Button} from 'react-bootstrap';

import NavBar from '../NavBar/NavBar'

import {fetchContrS_Repos} from '../../state/contributor/contributor'

import SignIn from '../SignIn/SignIn';

const mapStateToProps = state => ({
  auth: state.userDate.auth,
  logInSuccess: state.userDate.logInSuccess,
  deleted: state.angRepo.deleted,
  contrS_rep: state.contrS_repos.contrS_rep
})

const mapDispatchToProps = dispatch => ({
  fetchContrS_Repos: (oneContr, auth) => dispatch(fetchContrS_Repos(oneContr, auth))
})

class Contributor extends Component {
  constructor(){
    super()

    this.state = {
      oneContribu: null
    }

    this.fetchContributorS_repos = () =>{
      const oneContr = this.props.deleted.find(one =>
      one.login === this.props.params.contr);
      this.setState({oneContribu:oneContr});
      this.props.fetchContrS_Repos(oneContr, this.props.auth)
    }
  }

  componentWillMount(){
    this.fetchContributorS_repos()
  }

  render() {
    return (
      <div>
        {
          this.props.logInSuccess ?
            <div>
              <NavBar/>
              <p>{this.state.oneContribu.login}</p>
              <p>{this.state.oneContribu.id}</p>
              {
                this.props.contrS_rep.map(
                  contrOne =>
                  <Link key={contrOne.id} to={"/list/"+this.state.oneContribu.login+'/'+contrOne.name}>
                    <li>
                      {contrOne.name}
                    </li>
                  </Link>
                )
              }
            </div>
            :
            <div>
              <p>to see list you have to log in</p>
              <Link to="/login">
                <Button bsStyle="success">Sign in</Button>
              </Link>
            </div>
        }
      </div>
    )
  }

}

export default connect(mapStateToProps, mapDispatchToProps)(Contributor)
