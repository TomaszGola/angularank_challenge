import React, {Component} from 'react';
import {connect} from "react-redux";
import {Link} from "react-router";
import {Grid, Col, Row, Table, Image} from 'react-bootstrap'

import NavBar from '../NavBar/NavBar'
import NotFound from '../NotFound/NotFound'

import {fetchContrS_Repos} from '../../state/contributor/contributor'

const mapStateToProps = state => ({
  auth: state.userDate.auth,
  logInSuccess: state.userDate.logInSuccess,
  deleted: state.angRepo.deleted,
  contrS_rep: state.contrS_repos.contrS_rep
})

const mapDispatchToProps = dispatch => ({
  fetchContrS_Repos: (oneContr, auth) => dispatch(fetchContrS_Repos(oneContr, auth))
})

class Contributor extends Component {
  constructor() {
    super()

    this.state = {
      oneContribu: null
    }

    this.fetchContributorS_repos = () => {
      const oneContr = this.props.deleted.find(one =>
      one.login === this.props.params.contr);
      this.setState({oneContribu: oneContr});
      this.props.fetchContrS_Repos(oneContr, this.props.auth)
    }
  }

  componentWillMount() {
    this.fetchContributorS_repos()
  }

  render() {
    return (
      <div>
        {this.props.logInSuccess ?
          <div>
            <NavBar/>
            <Grid>
              <Row>
                <Col xs={6}>
                  <Col xs={5}>
                    <Image src={this.state.oneContribu.avatar_url} thumbnail/>
                  </Col>
                  <Col xs={7}>
                    <p>Name: {this.state.oneContribu.name}</p>
                    <a href={this.state.oneContribu.blog} target="blank">
                      <p>Link to blog</p>
                    </a>
                    <p>About: {this.state.oneContribu.bio}</p>
                    <p>Contact: {this.state.oneContribu.contact}</p>
                  </Col>
                </Col>
                <Col xs={6}>
                  <Table responsive hover>
                    <thead>
                    <tr>
                      <th>Name</th>
                      <th>Language</th>
                    </tr>
                    </thead>
                    {
                      this.props.contrS_rep.map(
                        contrOne =>
                          <tbody key={contrOne.id}>
                          <tr>
                            <td>
                              <Link to={"/list/" + this.state.oneContribu.login + '/' + contrOne.name}>
                                {contrOne.name}
                              </Link>
                            </td>
                            <td>{contrOne.language}</td>
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

export default connect(mapStateToProps, mapDispatchToProps)(Contributor)
