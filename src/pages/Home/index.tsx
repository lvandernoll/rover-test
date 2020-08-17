import React, { useEffect } from 'react';
import useFetch from 'hooks/useFetch';
import { Box } from 'components/bulma/elements';
import { Tab, Tabs } from 'components/bulma/components';
import { Assignment } from 'interfaces';
import { useSelector } from 'react-redux';
import { userState } from 'redux/selectors';
import AssignmentCard from 'components/AssignmentCard';
import { Columns } from 'components/bulma/columns';

const Home: React.FC = () => {
  const token = useSelector(userState).token;
  const [{ response, isLoading, error }, doFetch] = useFetch<Assignment[]>(
    '/assignments',
  );
  useEffect(() => {
    doFetch({
      method: 'GET',
      headers: {
        'content-type': 'application/json',
        Authorization: token,
      },
    });
  }, [doFetch, token]);

  const assignments = response;

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
              {assignments?.map((assignment: Assignment) => (
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
