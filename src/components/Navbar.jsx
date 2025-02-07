import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <h1>Todo List App</h1>
      </div>
      <div className="navbar-links">
        <Link to="/">Dashboard</Link>
        <Link to="/about">About</Link>
      </div>
    </nav>
  );
}

export default Navbar;