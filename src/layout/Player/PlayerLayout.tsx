import React from 'react';
import { Tabs, Tab } from 'components/bulma/components';
import { Box } from 'components/bulma/elements';
import { AppLayout } from 'layout/App/AppLayout';

export const PlayerLayout: React.FC = ({ children }) => {
  return (
    <AppLayout>
      <Tabs size="large">
        <Tab to="/">Assignments</Tab>
        <Tab to="/accepted-assignments">Accepted assignments</Tab>
      </Tabs>
      <Box withTabs>{children}</Box>
    </AppLayout>
  );
};
