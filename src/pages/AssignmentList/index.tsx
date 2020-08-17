import React, { useEffect } from 'react';
import useFetch from 'hooks/useFetch';
import { Assignment, Report } from 'interfaces';
import AssignmentCard from 'components/AssignmentCard';
import { Columns, Column } from 'components/bulma/columns';
import { Title, IconContainer } from 'components/bulma/elements';
import { faPlusCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
import { getAdminPath } from 'App';

interface Props {
  role?: 'PLAYER' | 'ADMIN';
}

const AssignmentList: React.FC<Props> = ({ role }) => {
  const [{ response, isLoading, error }, doFetch] = useFetch<Assignment[]>(
    '/assignments',
  );
  useEffect(() => {
    doFetch({
      method: 'GET',
      headers: {
        'content-type': 'application/json',
      },
    });
  }, [doFetch]);

  const assignments = response;

  const reports: Report[] = [
    {
      id: 1,
      assignmentId: 1,
      playerId: 1,
      status: 'REVIEW',
      pointsGiven: 1,
    },
    {
      id: 1,
      assignmentId: 1,
      playerId: 1,
      status: 'REJECTED',
      pointsGiven: 1,
    },
  ];

  return (
    <div>
      {role === 'ADMIN' && (
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
      )}
      {isLoading && <p>Loading...</p>}
      {error && <p>Something went wrong...</p>}
      {!isLoading && !error && (
        <Columns gap={8} multiline>
          {assignments?.map((assignment: Assignment, i: number) => (
            <AssignmentCard
              key={assignment.id}
              assignment={assignment}
              report={role === 'PLAYER' ? reports[i % 3] : undefined}
              noFooter={role === 'ADMIN'}
            />
          ))}
        </Columns>
      )}
    </div>
  );
};

export default AssignmentList;
