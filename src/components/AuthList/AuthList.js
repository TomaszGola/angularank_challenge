import React, {Component} from 'react';
import {connect} from "react-redux";

import SignIn from '../SignIn/SignIn';
import List from '../List/List'


const mapStateToProps = state => ({
  logInSuccess: state.userDate.logInSuccess,
})


class AuthList extends Component {
  render() {
    return (
      <div>
        {
          this.props.logInSuccess ?
            <div>
              <List/>
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

export default connect(mapStateToProps, null)(AuthList)
