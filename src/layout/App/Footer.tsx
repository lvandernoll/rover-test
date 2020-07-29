import React from 'react';
import Container from 'components/bulma/layout/Container';

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <Container fluid>
        <p>&copy; Competa 2020</p>
      </Container>
    </footer>
  );
};

export default Footer;
