import React from 'react';
import { Assignment, Report } from 'interfaces';
import AssignmentCard from 'components/AssignmentCard';
import { Columns } from 'components/bulma/columns';
import {
  selectAssignments,
  selectAssignmentLoadingState,
  selectAssignmentErrorState,
} from 'redux/selectors';
import { useSelector } from 'react-redux';

interface Props {
  role?: 'PLAYER' | 'ADMIN';
  reportFilter?: (r?: Report) => boolean;
}

const AssignmentList: React.FC<Props> = ({ role, reportFilter }) => {
  const assignments = useSelector(selectAssignments);
  const isLoading = useSelector(selectAssignmentLoadingState);
  const error = useSelector(selectAssignmentErrorState);

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
    {
      id: 1,
      assignmentId: 1,
      playerId: 1,
      status: 'ACCEPTED',
      pointsGiven: 1,
    },
  ];

  return (
    <>
      {isLoading && <p>Loading...</p>}
      {error && <p>Something went wrong...</p>}
      {!isLoading && !error && (
        <Columns gap={8} multiline>
          {assignments?.map((assignment: Assignment, i: number) => {
            const report: Report | undefined =
              role === 'PLAYER' ? reports[i % 4] : undefined;
            if (!reportFilter || reportFilter(report)) {
              return (
                <AssignmentCard
                  key={assignment.id}
                  assignment={assignment}
                  report={report}
                  noFooter={role === 'ADMIN'}
                />
              );
            }
          })}
        </Columns>
      )}
    </>
  );
};

export default AssignmentList;
