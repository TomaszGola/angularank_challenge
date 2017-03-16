import React, {Component} from 'react';
import {Form, FormGroup, FormControl, ControlLabel,  Button} from 'react-bootstrap';

class SignIn extends Component {
  constructor(){
    super()

    this.state= {
      username: '',
      password: ''
    }

    this.enterDate = e => {
      e.preventDefault()
      console.log(this.state)
      console.log(this.props)
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

export default SignIn