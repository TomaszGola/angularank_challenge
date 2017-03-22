import React, {Component} from 'react'
import {connect} from 'react-redux'
import {Navbar, NavDropdown, MenuItem, Nav } from 'react-bootstrap'

import SignOut from '../SignOut/SignOut'

const mapStateToProps = state => ({
  userInfo: state.userDate.userInfo
})

class NavBar extends Component {
  render(){
    return(
      <Navbar>
        <Navbar.Header>
          <Navbar.Brand>
            {this.props.userInfo.login}
          </Navbar.Brand>
          <Navbar.Toggle/>
        </Navbar.Header>
        <Navbar.Collapse>
          <Nav pullRight>
          <NavDropdown title="Dropdown" id="dropdown">
            <MenuItem>
              {this.props.userInfo.login}
            </MenuItem>
            <MenuItem>
              <SignOut/>
            </MenuItem>
          </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    )
  }
}

export default connect(mapStateToProps, null)(NavBar)