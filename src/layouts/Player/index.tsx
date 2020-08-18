import React from 'react';
import { Tabs, Tab } from 'components/bulma/components';
import { Box } from 'components/bulma/elements';
import Header from '../App/Header';
import Footer from '../App/Footer';
import LayoutContent from 'layouts/Content';

const PlayerLayout: React.FC = ({ children }) => (
  <>
    <Header />
    <LayoutContent>
      <Tabs>
        <Tab to="/">Assignments</Tab>
        <Tab to="/accepted-assignments">Accepted assignments</Tab>
      </Tabs>
      <Box withTabs>{children}</Box>
    </LayoutContent>
    <Footer />
  </>
);

export default PlayerLayout;
