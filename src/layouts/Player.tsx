import React from 'react';
import { Tabs, Tab } from 'components/bulma/components';
import { Box } from 'components/bulma/elements';

const PlayerLayout: React.FC = ({ children }) => (
  <>
    <Tabs size="large">
      <Tab to="/">Assignments</Tab>
      <Tab to="/accepted-assignments">Accepted assignments</Tab>
    </Tabs>
    <Box withTabs>{children}</Box>
  </>
);

export default PlayerLayout;
