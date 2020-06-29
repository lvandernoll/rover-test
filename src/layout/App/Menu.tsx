import React from 'react';

const Menu: React.FC = () => {
  return (
    <aside className="menu">
      <p className="menu-label">Main</p>
      <ul className="menu-list">
        <li>
          <a>Dashboard</a>
        </li>
        <li>
          <a>Customers</a>
        </li>
      </ul>
    </aside>
  );
};

export default Menu;
