import React, {Component} from 'react';
import {connect} from "react-redux";
import {Link} from "react-router";

import { fetchAngularRep } from '../../state/list/list'

const mapStateToProps = state => ({
  auth: state.userDate.auth,
  contr: state.angRepo.contr
})

const mapDispatchToProps = dispatch => ({
  fetchAngularRep: auth => dispatch(fetchAngularRep(auth))
})


class List extends Component {

  componentWillMount(){
    this.props.fetchAngularRep(this.props.auth)
  }

  render() {
    return (
      <div>
        <p>tutaj będzie lista</p>
        {this.props.contr.map(
          one =>
            <Link to={"/list/"+ one.login}>
              <p>{one.login}</p>
            </Link>
        )}
      </div>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(List)
