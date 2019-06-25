import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchUsers } from '../../actions/index';
import Spinner from '../Spinner';
import Fatal from '../Fatal';
import UsersTable from './UsersTable';

class Users extends Component {
  componentDidMount() {
    if (!this.props.users.length) {
      this.props.fetchUsers();
    }
  }

  render() {
    return (
      <div className='margin'>
        {this.props.error && <Fatal msg={this.props.error} />}
        {this.props.loading && <Spinner />}
        <UsersTable users={this.props.users} />
      </div>
    );
  }
}
function mapStateToProps(state) {
  return {
    users: state.user.users,
    loading: state.user.loading,
    error: state.user.error,
  };
}
export default connect(
  mapStateToProps,
  { fetchUsers },
)(Users);
