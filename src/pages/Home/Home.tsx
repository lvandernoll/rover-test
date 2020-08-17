import React, { useEffect } from 'react';
import useFetch from 'api/api';
import { Box } from 'components/bulma/elements';
import { Tab, Tabs, Assignments } from 'components/bulma/components';
import { Assignment } from 'interfaces';
import { useSelector } from 'react-redux';
import { userState } from 'redux/selectors';

const Home: React.FC = () => {
  const token = useSelector(userState).token;
  const [{ response, isLoading, error }, doFetch] = useFetch<Assignment[]>(
    'api/assignments',
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
      {error ? (
        <p>Something went wrong...</p>
      ) : (
        <React.Fragment>
          <Tabs size="large">
            <Tab to="/">Assignments</Tab>
            <Tab to="/accepted-assignments">Accepted assignments</Tab>
          </Tabs>
          <Box withTabs>
            <div className="columns is-8 is-multiline">
              {assignments?.map((assignment: Assignment) => (
                <Assignments
                  key={assignment.id}
                  title={assignment.title}
                  description={assignment.description}
                  points={assignment.points_maximum}
                />
              ))}
            </div>
          </Box>
        </React.Fragment>
      )}
    </div>
  );
};

export default Home;
