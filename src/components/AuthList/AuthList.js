import React, {Component} from 'react';
import {connect} from "react-redux";
import {Link} from "react-router";
import {Button} from 'react-bootstrap'


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
              <Link to="/login">
                <Button bsStyle="success">Sign in</Button>
              </Link>
            </div>
        }
      </div>
    )
  }
}

export default connect(mapStateToProps, null)(AuthList)
