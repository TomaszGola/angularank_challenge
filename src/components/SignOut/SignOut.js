import React, {Component} from 'react';
import {connect} from "react-redux";
import {Button} from 'react-bootstrap';

import {signOut} from '../../state/signIn/signIn'

const mapStateToProps = state => ({
  logInSuccess: state.userDate.logInSuccess,
  auth: state.userDate.auth
})

const mapDispatchToProps = dispatch => ({
  signOut: () => dispatch(signOut()),
})

class SignOut extends Component {
  constructor(){
    super()

    this.logOut = e => {
      e.preventDefault()
      this.props.signOut()
    }
  }


  render(){
    return(
      <div>
        <Button onClick={this.logOut}>
          Sign out
        </Button>
      </div>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignOut)