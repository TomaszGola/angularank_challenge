import React, {Component} from 'react';
import {connect} from "react-redux";

import {signOut} from '../../state/signIn/signIn'

const mapStateToProps = state => ({
  logInSuccess: state.userDate.logInSuccess,
  auth: state.userDate.auth
})

const mapDispatchToProps = dispatch => ({
  signOut: () => dispatch(signOut()),
})

class SignOut extends Component {
  constructor() {
    super()

    this.logOut = e => {
      e.preventDefault()
      this.props.signOut()
    }
  }

  render() {
    return (
      <span onClick={this.logOut}>
          Sign out
      </span>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignOut)