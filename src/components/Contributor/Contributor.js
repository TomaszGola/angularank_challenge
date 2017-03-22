import React, {Component} from 'react';
import {connect} from "react-redux";

import SignIn from '../SignIn/SignIn';

const mapStateToProps = state => ({
  auth: state.userDate.auth,
  logInSuccess: state.userDate.logInSuccess,
  deleted: state.angRepo.deleted
})

class Contributor extends Component {
  render() {

    const oneContr = this.props.deleted.find(one =>
    one.login === this.props.params.contr
    )

    return (
      <div>
        {
          this.props.logInSuccess ?
            <div>
              <p>{oneContr.login}</p>
              <p>{oneContr.id}</p>
            </div>
            :
            <div>
              <p>to see list you have to log in</p>
              <SignIn/>
            </div>
        }
      </div>
    )
  }

}

export default connect(mapStateToProps, null)(Contributor)
