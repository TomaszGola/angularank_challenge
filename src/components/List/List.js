import React, {Component} from 'react';
import {connect} from "react-redux";
import {Link} from "react-router";
import {ButtonGroup, Button, DropdownButton, MenuItem} from 'react-bootstrap'

import { fetchAngularRep, deleteRepetitions } from '../../state/list/list'


const mapStateToProps = state => ({
  auth: state.userDate.auth,
  contr: state.angRepo.contr,
  deleted: state.angRepo.deleted
})

const mapDispatchToProps = dispatch => ({
  fetchAngularRep: auth => dispatch(fetchAngularRep(auth)),
  deleteRepetitions: contr => dispatch(deleteRepetitions(contr))
})


class List extends Component {
  constructor(){
    super()

    this.state = {
      showList: false,
      sortType: null
    }
    this.fetch = e => {
      e.preventDefault()
      this.props.fetchAngularRep(this.props.auth)
    }
    this.delete = e => {
      e.preventDefault()
      this.props.deleteRepetitions(this.props.contr)
    }
    this.show = e => {
      e.preventDefault()
      this.setState({showList: true})
    }
    this.byFollowers = e => {
      e.preventDefault()
      this.setState(
        {sortType: ((a,b)=> b.followers - a.followers )}
        )
    }
    this.byGists = e => {
      e.preventDefault()
      this.setState(
        {sortType: ((a,b)=> b.public_gists - a.public_gists )}
        )
    }
    this.byRepos = e => {
      e.preventDefault()
      this.setState(
        {sortType: ((a,b)=> b.public_repos - a.public_repos)}
      )
    }
    this.byAngRepos = e => {
      e.preventDefault()
      this.setState(
        {sortType: ((a,b)=> b.count - a.count)}
      )
    }
  }


  render() {
    return (
      <div>
        <p>tutaj będzie lista</p>
        <ButtonGroup>
        <Button onClick={this.fetch}>
          Start fetching
        </Button>
        <Button onClick={this.delete}>
          Delete repetitions
        </Button>
        <Button onClick={this.show}>
          show list
        </Button>
          <DropdownButton title='SORT' id="dropdown">
            <MenuItem
              onClick={this.byFollowers}
            >
              by followers
            </MenuItem>
            <MenuItem
              onClick={this.byGists}
            >
              by gists
            </MenuItem>
            <MenuItem
              onClick={this.byRepos}
            >
              by repos
            </MenuItem>
            <MenuItem
              onClick={this.byAngRepos}
            >
              by ang repos
            </MenuItem>
          </DropdownButton>
        </ButtonGroup>


        {this.state.showList  ?
          <div>
          {this.props.deleted.sort(this.state.sortType).map(
            one =>
            <li key={one.id}>
              <Link to={"/list/"+ one.login}>
                <span>{one.login} |</span>
              </Link>
              <span>followers: {one.followers} |</span>
              <span>gists: {one.public_gists} |</span>
              <span>repos: {one.public_repos} |</span>
              <span>Ang repos: {one.count} |</span>
            </li>
          )}
          </div>
          :
          <span/>

        }


      </div>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(List)
