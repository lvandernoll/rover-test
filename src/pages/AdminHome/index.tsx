import React from 'react';
import { IconContainer } from 'components/bulma/elements';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { getAdminPath } from 'utils/getAdminPath';
import { faPlusCircle } from '@fortawesome/free-solid-svg-icons';

const AdminHome: React.FC = () => {
  return (
    <>
      <p>Hi Admin</p>
      <IconContainer>
        <Link to={getAdminPath('/create-assignment')}>
          <FontAwesomeIcon size="2x" icon={faPlusCircle} />
        </Link>
      </IconContainer>
    </>
  );
};

export default AdminHome;
