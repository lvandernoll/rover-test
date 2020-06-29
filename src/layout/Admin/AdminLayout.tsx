import React, { Fragment } from 'react';
import Section from '../../components/bulma/layout/Section/Section';
import Container from '../../components/bulma/layout/Container/Container';

export const AdminLayout: React.FC = ({ children }) => {
  return (
    <Fragment>
      <Section>
        <Container fluid>
          <h1>Admin panel</h1>
          {children}
        </Container>
      </Section>
    </Fragment>
  );
};
