import React, {Component} from 'react';
import {connect} from "react-redux";

import List from '../List/List'
import NotFound from '../NotFound/NotFound'

const mapStateToProps = state => ({
  logInSuccess: state.userDate.logInSuccess,
})

class AuthList extends Component {
  render() {
    return (
      <div>
        {
          this.props.logInSuccess ?
            <List/>
            :
            <NotFound/>
        }
      </div>
    )
  }
}

export default connect(mapStateToProps, null)(AuthList)
