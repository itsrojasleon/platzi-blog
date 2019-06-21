import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchUsers } from '../../actions/index';
import Spinner from '../Spinner';
import Fatal from '../Fatal';

class Users extends Component {
  componentDidMount() {
    this.props.fetchUsers();
  }

  renderContent = () => (
    <table className='table'>
      <thead>
        <tr>
          <th>Name</th>
          <th>Email</th>
          <th>Website</th>
        </tr>
      </thead>
      <tbody>{this.renderRows()}</tbody>
    </table>
  );

  renderRows = () =>
    this.props.users.map(user => (
      <tr key={user.id}>
        <td>{user.name}</td>
        <td>{user.email}</td>
        <td>{user.website}</td>
      </tr>
    ));

  render() {
    return (
      <div className='margin'>
        {this.props.error && <Fatal msg={this.props.error} />}
        {this.props.loading && <Spinner />}
        {this.renderContent()}
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
