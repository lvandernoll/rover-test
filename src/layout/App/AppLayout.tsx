import React, { Fragment } from 'react';
import TopBar from './TopBar';
import Section from '../../components/bulma/layout/Section/Section';
import Container from '../../components/bulma/layout/Container/Container';
import Menu from './Menu';
import Footer from './Footer';

export const AppLayout: React.FC = ({ children }) => {
  return (
    <Fragment>
      <TopBar />
      <Section>
        <Container fluid>
          <div className="columns">
            <div className="column is-one-quarter">
              <Menu />
            </div>
            <div className="column">{children}</div>
          </div>
        </Container>
      </Section>
      <Footer />
    </Fragment>
  );
};
