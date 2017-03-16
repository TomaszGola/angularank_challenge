import React, {Component} from 'react';
import {Form, FormGroup, FormControl, ControlLabel,  Button} from 'react-bootstrap';

class SignIn extends Component {
  render(){
    return (
        <Form inline>
          <FormGroup controlId="formInlineName">
            <ControlLabel>Username</ControlLabel>
            {' '}
            <FormControl type="text" placeholder="username" />
          </FormGroup>
          {' '}
          <FormGroup controlId="formInlinePassword">
            <ControlLabel>Password</ControlLabel>
            {' '}
            <FormControl type="password" placeholder="password" />
          </FormGroup>
          {' '}
          <Button type="submit" bsStyle="success">
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