import React from 'react';

const App = () => {
  const rows = () => [
    <tr>
      <td>rojasleon</td>
      <td>rojasleon.dev@gmail.com</td>
      <td>rojasleon.me</td>
    </tr>,
    <tr>
      <td>rojasleon</td>
      <td>rojasleon.dev@gmail.com</td>
      <td>rojasleon.me</td>
    </tr>,
  ];

  return (
    <div className='margin'>
      <table className='table'>
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Correo</th>
            <th>Enlace</th>
          </tr>
        </thead>
        <tbody>{rows()}</tbody>
      </table>
    </div>
  );
};

export default App;
