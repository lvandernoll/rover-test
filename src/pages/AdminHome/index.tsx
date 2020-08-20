import React from 'react';
import { IconContainer } from 'components/bulma/elements';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { getAdminPath } from 'utils/getAdminPath';
import { faPlusCircle } from '@fortawesome/free-solid-svg-icons';
import { logout } from 'redux/actions/user/actions';
import { useDispatch } from 'react-redux';

const AdminHome: React.FC = () => {
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logout());
  };
  return (
    <>
      <p>Hi Admin</p>
      <IconContainer>
        <Link to={getAdminPath('/create-assignment')}>
          <FontAwesomeIcon size="2x" icon={faPlusCircle} />
        </Link>
      </IconContainer>
      <div className="buttons">
        <button onClick={handleLogout} className="button is-primary">
          Logout
        </button>
      </div>
    </>
  );
};

export default AdminHome;
