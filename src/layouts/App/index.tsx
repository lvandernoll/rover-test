import React from 'react';
import Header from './Header';
import Section from 'components/bulma/layout/Section';
import Container from 'components/bulma/layout/Container';
import Footer from './Footer';
import { Columns, Column } from 'components/bulma/columns';

const AppLayout: React.FC = ({ children }) => (
  <>
    <Header />
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

export default AppLayout;
