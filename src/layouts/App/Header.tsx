import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from './logo.svg';

const Header: React.FC = ({ children }) => {
  return (
    <header>
      <nav
        className="navbar is-dark"
        role="navigation"
        aria-label="main navigation"
      >
        <div className="navbar-brand">
          <NavLink
            className="navbar-item is-family-code"
            to='/'
          >
            <img src={logo} alt="Rover Test" />
            <h1>Rover Test</h1>
          </NavLink>
        </div>
        <div
          className='navbar-menu'
          id="navMenu"
          style={{ backgroundColor: 'unset' }}
        >
          {children}
        </div>
      </nav>
    </header>
  );
};

export default Header;
