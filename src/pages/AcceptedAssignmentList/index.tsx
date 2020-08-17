import React, { useEffect } from 'react';
import useFetch from 'hooks/useFetch';
import { Assignment } from 'interfaces';
import AssignmentCard from 'components/AssignmentCard';
import { Columns } from 'components/bulma/columns';
import { Title } from 'components/bulma/elements';

const AcceptedAssignmentList: React.FC = () => {
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

  return (
    <div>
      {isLoading && <p>Loading...</p>}
      {error && <p>Something went wrong...</p>}
      {!isLoading && !error && (
        <Columns gap={8} multiline>
          {assignments?.map((assignment: Assignment) => (
            <AssignmentCard
              key={assignment.id}
              assignment={assignment}
              report={{
                id: 1,
                assignmentId: 1,
                playerId: 1,
                status: 'ACCEPTED',
                pointsGiven: 2,
              }}
            />
          ))}
        </Columns>
      )}
    </div>
  );
};

export default AcceptedAssignmentList;
