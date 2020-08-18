import React from 'react';
import Section from 'components/bulma/layout/Section';
import Container from 'components/bulma/layout/Container';

const LayoutContent: React.FC = ({ children }) => (
  <Section>
    <Container widescreen>{children}</Container>
  </Section>
);

export default LayoutContent;
