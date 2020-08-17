import React from 'react';
import TopBar from './TopBar';
import Section from 'components/bulma/layout/Section';
import Container from 'components/bulma/layout/Container';
import Footer from './Footer';
import { Columns, Column } from 'components/bulma/columns';

export const AppLayout: React.FC = ({ children }) => {
  return (
    <>
      <TopBar />
      <Section>
        <Container fluid>
          <Columns>
            <Column>{children}</Column>
          </Columns>
        </Container>
      </Section>
      <Footer />
    </>
  );
};
