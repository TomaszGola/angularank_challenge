import React, {Component} from 'react';
import {connect} from "react-redux";

import SignIn from '../SignIn/SignIn';

const mapStateToProps = state => ({
  auth: state.userDate.auth,
  logInSuccess: state.userDate.logInSuccess,
  contr: state.angRepo.contr
})

class Contributor extends Component {
  render() {

    const oneContr = this.props.contr.find(one =>
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
