import React, {Component} from 'react'
import {connect} from 'react-redux'
import {Navbar, Nav, NavItem, Image} from 'react-bootstrap'

import SignOut from '../SignOut/SignOut'

const mapStateToProps = state => ({
  userInfo: state.userDate.userInfo
})

class NavBar extends Component {
  render() {
    return (
      <Navbar>
        <Navbar.Header>
          <Navbar.Brand>
            <Image src={this.props.userInfo.avatar_url}/>
          </Navbar.Brand>
          <Navbar.Toggle/>
        </Navbar.Header>
        <Navbar.Collapse>
          <Nav pullRight>
            <NavItem href={this.props.userInfo.html_url} target="blank">
              {this.props.userInfo.login}
            </NavItem>
            <NavItem><SignOut/></NavItem>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    )
  }
}

export default connect(mapStateToProps, null)(NavBar)