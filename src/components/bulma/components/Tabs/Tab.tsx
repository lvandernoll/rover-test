import React, { useEffect, useState } from 'react';
import classnames from 'classnames';
import { useLocation } from 'react-router-dom';
import { NavLink } from 'react-router-dom';

type TabProps = {
  to: string;
};

const Tab: React.FC<TabProps> = ({ to, children }) => {
  const location = useLocation();
  const [active, setActive] = useState(false);

  useEffect(() => {
    if (location.pathname === to || location.pathname + location.hash === to) {
      setActive(true);
    } else {
      setActive(false);
    }
  }, [to, location]);

  return (
    <li className={classnames({ 'is-active': active })}>
      <NavLink
        to={to}
        className={classnames({ 'has-background-grey-dark': active })}
      >
        {children}
      </NavLink>
    </li>
  );
};

export default Tab;
