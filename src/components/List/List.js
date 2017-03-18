import React, {Component} from 'react';
import {connect} from "react-redux";

import { fetchAngularRep } from '../../state/list/list'

const mapStateToProps = state => ({
  auth: state.userDate.auth
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
      </div>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(List)
