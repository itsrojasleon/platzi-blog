import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchUsers } from '../../actions/index';

class Publications extends Component {
  componentDidMount() {
    if (!this.props.users.length) {
      this.props.fetchUsers();
    }
  }
  render() {
    return <div>{this.props.match.params.id}</div>;
  }
}
function mapStateToProps(state) {
  return {
    users: state.user.users,
  };
}
export default connect(
  mapStateToProps,
  { fetchUsers },
)(Publications);
