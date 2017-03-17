import React, {Component} from 'react';
import {connect} from "react-redux";
import {Form, FormGroup, FormControl, ControlLabel,  Button} from 'react-bootstrap';

const mapDispatchToProps = dispatch => ({
  enterDateToStore: (username, password) => dispatch({type: 'STORE_USER_DATE', username:username, password:password})
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
        </Form>
    )
  }
}

export default connect(null, mapDispatchToProps)(SignIn)
