import React from 'react';
import Section from 'components/bulma/layout/Section';
import Container from 'components/bulma/layout/Container';
import useRoleAuth from 'hooks/useRoleAuth';

export const AdminLayout: React.FC = ({ children }) => {
  useRoleAuth();

  return (
    <Section>
      <Container fluid>
        <h1>Admin panel</h1>
        {children}
      </Container>
    </Section>
  );
};
