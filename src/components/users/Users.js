import React, { Component } from 'react';
import axios from 'axios';

class Users extends Component {
  state = { users: [], loading: false, error: false };

  async componentDidMount() {
    this.setState({ loading: true });
    try {
      const { data } = await axios.get(
        'http://jsonplaceholder.typicode.com/users',
      );
      this.setState({ users: data, loading: false });
    } catch (error) {
      this.setState({ error, loading: false });
    }
  }

  rows = () =>
    this.state.users.map(user => (
      <tr key={user.id}>
        <td>{user.name}</td>
        <td>{user.email}</td>
        <td>{user.website}</td>
      </tr>
    ));

  render() {
    return (
      <div className='margin'>
        {this.state.loading && <span>Loading..</span>}
        <table className='table'>
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Website</th>
            </tr>
          </thead>
          {!this.state.loading && <tbody>{this.rows()}</tbody>}
        </table>
      </div>
    );
  }
}

export default Users;
