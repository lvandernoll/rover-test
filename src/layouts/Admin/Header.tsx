import React from 'react';
import Header from 'layouts/App/Header';
import { NavLink } from 'react-router-dom';
import { getAdminPath } from 'App';

const AdminHeader: React.FC = () => (
  <Header>
    <div className="navbar-start">
      <NavLink
        className="navbar-item"
        to={getAdminPath('/submitted-assignments')}
      >
        Submitted assignments
      </NavLink>
    </div>
  </Header>
);

export default AdminHeader;
