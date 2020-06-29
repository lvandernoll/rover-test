import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import logo from './logo.svg';
import classnames from 'classnames';

const TopBar: React.FC = () => {
  const [isMenuActive, setIsMenuActive] = useState(false);

  return (
    <nav className="navbar" role="navigation" aria-label="main navigation">
      <div className="navbar-brand">
        <NavLink className="navbar-item is-family-code" to="/">
          <img src={logo} /> <h1>Competa Hero</h1>
        </NavLink>
        <button
          className={`navbar-burger burger ${isMenuActive ? 'is-active' : ''}`}
          onClick={() => setIsMenuActive(!isMenuActive)}
          aria-label="menu"
          aria-expanded="false"
          data-target="navMenu"
        >
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </button>
      </div>
      <div
        className={classnames('navbar-menu', { 'is-active': isMenuActive })}
        id="navMenu"
      >
        <div className="navbar-end">
          <div className="navbar-item">
            <div className="buttons">
              <button className="button is-primary">Logout</button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default TopBar;
