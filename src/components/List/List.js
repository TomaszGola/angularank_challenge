import React, {Component} from 'react';
import {connect} from "react-redux";
import {Link} from "react-router";
import { ButtonGroup, Button, DropdownButton, MenuItem, Grid, Table } from 'react-bootstrap'

import NavBar from '../NavBar/NavBar'

import {fetchAngularRep, deleteRepetitions} from '../../state/list/list'


const mapStateToProps = state => ({
  auth: state.userDate.auth,
  contr: state.angRepo.contr,
  deleted: state.angRepo.deleted,
  countCont: state.angRepo.countCont
})

const mapDispatchToProps = dispatch => ({
  fetchAngularRep: auth => dispatch(fetchAngularRep(auth)),
  deleteRepetitions: contr => dispatch(deleteRepetitions(contr))
})


class List extends Component {
  constructor() {
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
        {sortType: ((a, b) => b.followers - a.followers )}
      )
    }
    this.byGists = e => {
      e.preventDefault()
      this.setState(
        {sortType: ((a, b) => b.public_gists - a.public_gists )}
      )
    }
    this.byRepos = e => {
      e.preventDefault()
      this.setState(
        {sortType: ((a, b) => b.public_repos - a.public_repos)}
      )
    }
    this.byAngRepos = e => {
      e.preventDefault()
      this.setState(
        {sortType: ((a, b) => b.count - a.count)}
      )
    }
  }


  render() {
    return (
      <div>
        <NavBar/>
        <Grid>
          <p>
            To see list you have to first click once button "Start fetching".
            When fetched contributors will be 407 you have to click button "Delete repetitions" which delete repetitions
            and count them.
            Now you can click button "Show list". All time when you come back to the list view you have to
            click Show list.
          </p>
          <p>
            Doing this exercise I have problem with async actions.
            I couldn't find end of all 407 fetch for each contributor.
            I spend two days trying to use Promise.all("407*fetch").then() but that also give me 407 actions.
            I'm not proud of solution which I use but I don't know how to use promise.all() for to work properly.
          </p>
          <p>Fetched contriutors: {this.props.countCont}</p>
          <ButtonGroup>
            <Button onClick={this.fetch}>
              Start fetching
            </Button>
            <Button onClick={this.delete}>
              Delete repetitions
            </Button>
            <Button onClick={this.show}>
              Show list
            </Button>
            <DropdownButton title='SORT' id="dropdown">
              <MenuItem onClick={this.byFollowers}>
                by followers
              </MenuItem>
              <MenuItem onClick={this.byGists}>
                by gists
              </MenuItem>
              <MenuItem onClick={this.byRepos}>
                by repos
              </MenuItem>
              <MenuItem onClick={this.byAngRepos}>
                by ang repos
              </MenuItem>
            </DropdownButton>
          </ButtonGroup>

          {this.state.showList ?
            <Table responsive hover>
              <thead>
              <tr>
                <th>Login</th>
                <th>Number of followers</th>
                <th>Number of public gists</th>
                <th>Number of public repos</th>
                <th>Number of angular repos</th>
              </tr>
              </thead>
              {this.props.deleted.sort(this.state.sortType).map(
                one =>
                  <tbody key={one.id}>
                  <tr>
                    <td>
                      <Link to={"/list/" + one.login}>
                        {one.login}
                      </Link>
                    </td>
                    <td>{one.followers}</td>
                    <td>{one.public_gists}</td>
                    <td>{one.public_repos}</td>
                    <td>{one.count}</td>
                  </tr>
                  </tbody>
              )}
            </Table>
            :
            <span/>
          }
        </Grid>
      </div>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(List)