import React, {Component} from 'react';
import {connect} from "react-redux";
import {Link} from "react-router";
import {Form, FormGroup, FormControl, ControlLabel,  Button} from 'react-bootstrap';

import {signIn} from '../../state/signIn/signIn'

const mapStateToProps = state => ({
  logInSuccess: state.userDate.logInSuccess,
  error: state.userDate.error
})

const mapDispatchToProps = dispatch => ({
  enterDateToStore: (username, password) => dispatch({type: 'STORE_USER_DATE', username:username, password:password}),
  signIn: (username, password) => dispatch(signIn(username,password))
})

class SignIn extends Component {
  constructor(){
    super()

    this.state= {
      username: '',
      password: ''
    }

    this.enterDate = e => {
      e.preventDefault()
      this.props.enterDateToStore(this.state.username, this.state.password)
      this.props.signIn(this.state.username, this.state.password)
    }
  }

  render(){
    return (
        <Form inline>
          <FormGroup controlId="formInlineName">
            <ControlLabel>Username</ControlLabel>
            {' '}

            <FormControl
              type="text"
              placeholder="username"
              onChange={
                e => this.setState({
                  username: e.target.value
                })}
            />

          </FormGroup>
          {' '}
          <FormGroup controlId="formInlinePassword">
            <ControlLabel>Password</ControlLabel>
            {' '}

            <FormControl
              type="password"
              placeholder="password"
              onChange={
                e => this.setState({
                  password: e.target.value
                })}
            />

          </FormGroup>
          {' '}
          <Button type="submit" bsStyle="success" onClick={this.enterDate}>
            Sign in
          </Button>
          <a href="https://github.com/join">
            <Button bsStyle="danger">Sign up</Button>
          </a>

          {
            this.props.logInSuccess ?
              <div>
                <p>log in success!</p>
                <Link to="/list">
                  <Button bsStyle="success">List</Button>
                </Link>
              </div>
              :
              this.props.error === null ?
                <p>you have to log</p> :
                <div>
                  <p>Forgot password?</p>
                  <a href="https://github.com/password_reset">
                    <Button>reset password</Button>
                  </a>
                </div>
          }
        </Form>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignIn)
