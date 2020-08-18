import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import logo from './logo.svg';
import classnames from 'classnames';
import { Tag } from 'components/bulma/elements';

const Header: React.FC = ({ children }) => {
  const [isMenuActive, setIsMenuActive] = useState(false);

  return (
    <header>
      <nav
        className="navbar is-dark"
        role="navigation"
        aria-label="main navigation"
      >
        <div className="navbar-brand">
          <NavLink className="navbar-item is-family-code" to="/">
            {/* When role = admin, redirect to /admin instead */}
            <img src={logo} alt="Competa Hero" />
            <h1 className="is-sr-only">Competa Hero</h1>
            <span className="mr-2">Luuk Gille</span>
            <Tag color="info">Player</Tag>
          </NavLink>
          <button
            className={classnames('navbar-burger burger', {
              'is-active': isMenuActive,
            })}
            style={{
              border: 'none',
              outline: 'none',
              backgroundColor: 'unset',
            }}
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
          style={{ backgroundColor: 'unset' }}
        >
          {children}
          <div className="navbar-end">
            <div className="navbar-item">
              <div className="buttons">
                <button className="button is-primary">Logout</button>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
