import React from 'react';
import { Box } from 'components/bulma/elements';
import { Tab, Tabs } from 'components/bulma/components';
import { Assignment } from 'interfaces';
import { useSelector } from 'react-redux';
import {
  selectAssignmentLoadingState,
  selectAssignments,
  selectAssignmentErrorState,
} from 'redux/selectors';
import AssignmentCard from 'components/AssignmentCard';
import { Columns } from 'components/bulma/columns';

const Home: React.FC = () => {
  const assignments = useSelector(selectAssignments);
  const isLoading = useSelector(selectAssignmentLoadingState);
  const error = useSelector(selectAssignmentErrorState);

  return (
    <div>
      {isLoading && <p>Loading...</p>}
      {error && <p>Something went wrong...</p>}
      {!isLoading && !error && (
        <>
          <Tabs size="large">
            <Tab to="/">Assignments</Tab>
            <Tab to="/accepted-assignments">Accepted assignments</Tab>
          </Tabs>
          <Box withTabs>
            <Columns gap={8} multiline>
              {assignments.map((assignment: Assignment) => (
                <AssignmentCard key={assignment.id} assignment={assignment} />
              ))}
            </Columns>
          </Box>
        </>
      )}
    </div>
  );
};

export default Home;
