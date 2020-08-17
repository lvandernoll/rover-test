import React from 'react';
import Section from 'components/bulma/layout/Section';
import Container from 'components/bulma/layout/Container';

export const AdminLayout: React.FC = ({ children }) => {
  return (
    <>
      <Section>
        <Container fluid>
          <h1>Admin panel</h1>
          {children}
        </Container>
      </Section>
    </>
  );
};
