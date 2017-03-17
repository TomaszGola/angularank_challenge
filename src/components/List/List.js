import React, { Component } from 'react';
import {connect} from "react-redux";
import SignIn from '../SignIn/SignIn'

const mapStateToProps = state => ({
  logInSuccess: state.userDate.logInSuccess,
})

class List extends Component {
  render() {
    return (
      <div>
        {
          this.props.logInSuccess ?
          <p>here will be list</p> :
            <div>
              <p>you have to log</p>
              <SignIn/>
            </div>
        }
      </div>

    )
  }
}

export default connect(mapStateToProps, null)(List)
