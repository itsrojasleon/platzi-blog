import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchUsers } from '../../actions/index';

class Users extends Component {
  state = { users: [], loading: false, error: false };

  componentDidMount() {
    this.props.fetchUsers();
  }

  // rows = () =>
  //   this.state.users.map(user => (
  //     <tr key={user.id}>
  //       <td>{user.name}</td>
  //       <td>{user.email}</td>
  //       <td>{user.website}</td>
  //     </tr>
  //   ));

  render() {
    return (
      <div className='margin'>
        {/* {this.state.loading && <span>Loading..</span>} */}
        <table className='table'>
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Website</th>
            </tr>
          </thead>
          {/* {!this.state.loading && <tbody>{this.rows()}</tbody>} */}
        </table>
      </div>
    );
  }
}
function mapStateToProps(state) {
  return state.users;
}
export default connect(
  mapStateToProps,
  { fetchUsers },
)(Users);
