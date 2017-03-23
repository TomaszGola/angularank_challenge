import React, {Component} from 'react'
import {connect} from 'react-redux'
import {Grid, Row, Col, Table} from 'react-bootstrap'

import {fetchReposContributors} from '../../state/repoContributors/repoContributors'

import NavBar from '../NavBar/NavBar'
import NotFound from '../NotFound/NotFound'

const mapStateToProps = state => ({
  auth: state.userDate.auth,
  logInSuccess: state.userDate.logInSuccess,
  contrS_rep: state.contrS_repos.contrS_rep,
  repoContributors: state.repoContr.repoContributors
})

const mapDispatchToProps = dispatch => ({
  fetchReposContributors: (oneRepo, auth) => dispatch(fetchReposContributors(oneRepo, auth))
})

class RepoContributors extends Component {
  constructor() {
    super()

    this.state = {
      oneRepo: null
    }

    this.functionRepo = () => {
      const oneRepo = this.props.contrS_rep.find(one =>
      one.name === this.props.params.repoName);
      this.setState({oneRepo: oneRepo})
      this.props.fetchReposContributors(oneRepo, this.props.auth)
    }
  }

  componentWillMount() {
    this.functionRepo()
  }

  render() {
    return (
      <div>
        {
          this.props.logInSuccess ?
            <div>
              <NavBar/>
              <Grid>
                <Row>
                  <Col xs={6}>
                    <p>Name: {this.state.oneRepo.name}</p>
                    <p>Language: {this.state.oneRepo.language}</p>
                    <p>Forks: {this.state.oneRepo.forks}</p>
                    <p>Watchers: {this.state.oneRepo.watchers}</p>
                  </Col>
                  <Col xs={6}>
                    <Table responsive hover>
                      <thead>
                      <tr>
                        <th>Name</th>
                        <th>Contributions</th>
                      </tr>
                      </thead>
                      {
                        this.props.repoContributors.map(
                          oneRepoContr =>
                            <tbody key={oneRepoContr.id}>
                            <tr>
                              <td>
                                <a href={oneRepoContr.html_url} target="blank">
                                  {oneRepoContr.login}
                                </a>
                              </td>
                              <td>{oneRepoContr.contributions}</td>
                            </tr>
                            </tbody>
                        )
                      }
                    </Table>
                  </Col>
                </Row>
              </Grid>
            </div>
            :
            <NotFound/>
        }
      </div>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(RepoContributors)