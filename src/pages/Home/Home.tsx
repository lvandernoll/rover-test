import React, { useEffect } from 'react';
import Assignment from 'components/Assignment';
import Box from 'components/bulma/elements/Box';
import { Tabs, Tab } from 'components/bulma/components/Tabs';
import useFetch from 'api/api';

interface Assignments {
  id: number;
  title: string;
  description: string;
  points_maximum: number;
}

const Home: React.FC = () => {
  const [{ response, isLoading, error }, doFetch] = useFetch<Assignments[]>(
    'api/assignments',
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
              {assignments?.map((assignment: Assignments) => (
                <Assignment
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
