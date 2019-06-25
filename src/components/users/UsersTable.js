import React from 'react';
import { Link } from 'react-router-dom';

function UsersTable(props) {
  function renderRows() {
    return props.users.map((user, i) => (
      <tr key={user.id}>
        <td>{user.name}</td>
        <td>{user.email}</td>
        <td>{user.website}</td>
        <td>
          <Link to={`/posts/${i}`}>
            <i className='fas fa-eye' />
          </Link>
        </td>
      </tr>
    ));
  }
  return (
    <table className='table'>
      <thead>
        <tr>
          <th>Name</th>
          <th>Email</th>
          <th>Website</th>
        </tr>
      </thead>
      <tbody>{renderRows()}</tbody>
    </table>
  );
}
export default UsersTable;
