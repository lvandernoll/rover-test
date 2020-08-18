import React from 'react';
import { Columns, Column } from 'components/bulma/columns';
import { Title, IconContainer } from 'components/bulma/elements';
import { faPlusCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
import { getAdminPath } from 'App';
import AssignmentList from 'components/AssignmentList';

const AdminAssignmentList: React.FC = () => {
  return (
    <>
      <Columns mobile>
        <Column sizeMobile={10}>
          <Title>Assignments</Title>
        </Column>
        <Column sizeMobile={2} className="has-text-right">
          <IconContainer>
            <Link to={getAdminPath('/create-assignment')}>
              <FontAwesomeIcon size="2x" icon={faPlusCircle} />
            </Link>
          </IconContainer>
        </Column>
      </Columns>
      <AssignmentList role="ADMIN" />
    </>
  );
};

export default AdminAssignmentList;
