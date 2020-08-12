import React, { useState } from 'react';
import { NavLink, useHistory } from 'react-router-dom';
import logo from './logo.svg';
import classnames from 'classnames';

const TopBar: React.FC = () => {
  const [isMenuActive, setIsMenuActive] = useState(false);
  const history = useHistory();
  const logout = () => {
    localStorage.clear();
    history.push('/login');
  };

  return (
    <nav
      className="navbar is-dark"
      role="navigation"
      aria-label="main navigation"
    >
      <div className="navbar-brand">
        <NavLink className="navbar-item is-family-code" to="/">
          <img src={logo} alt="Competa Hero" />
          <h1>Competa Hero</h1>
        </NavLink>
        <button
          className={classnames('navbar-burger burger', {
            'is-active': isMenuActive,
          })}
          style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }} // Swatch style seems to have a bug where the default color is white
          onClick={() => setIsMenuActive(!isMenuActive)}
          aria-label="menu"
          aria-expanded={isMenuActive}
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
              <button onClick={logout} className="button is-primary">
                Logout
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default TopBar;
