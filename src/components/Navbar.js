import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <header>
      <nav className='navbar'>
        <Link to='/'>Users</Link>
        <Link to='/tasks'>Tasks</Link>
      </nav>
    </header>
  );
}
export default Navbar;
