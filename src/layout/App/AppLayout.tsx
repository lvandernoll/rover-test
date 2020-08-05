import React, { Fragment } from 'react';
import TopBar from './TopBar';
import Section from 'components/bulma/layout/Section';
import Container from 'components/bulma/layout/Container';
import Footer from './Footer';

export const AppLayout: React.FC = ({ children }) => {
  return (
    <Fragment>
      <TopBar />
      <Section>
        <Container fluid>
          <div className="columns">
            <div className="column">{children}</div>
          </div>
        </Container>
      </Section>
      <Footer />
    </Fragment>
  );
};
