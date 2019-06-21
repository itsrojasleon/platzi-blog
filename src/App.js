import React, { Component } from 'react';

class App extends Component {
  constructor() {
    super();
    this.state = {
      users: [
        {
          name: 'Rojas León',
          email: 'rojasleon.dev@gmail.com',
          link: 'rojasleon.com',
        },
        {
          name: 'Juan Luis Rojas',
          email: 'rojasleon.dev@gmail.com',
          link: '',
        },
        {
          name: 'Platzi',
          email: 'info@platzi.com',
          link: 'platzi.com',
        },
      ],
    };
  }

  ponerFilas = () =>
    this.state.users.map(user => (
      <tr>
        <td>{user.name}</td>
        <td>{user.email}</td>
        <td>{user.link}</td>
      </tr>
    ));

  render() {
    return (
      <div className='margen'>
        <table className='tabla'>
          <thead>
            <tr>
              <th>name</th>
              <th>email</th>
              <th>link</th>
            </tr>
          </thead>
          <tbody>{this.ponerFilas()}</tbody>
        </table>
      </div>
    );
  }
}

export default App;
