import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import TopBar from './layout/TopBar';
import Routes from './layout/Routes';
import Footer from './layout/Footer';
import Menu from './layout/Menu';
import Section from './components/bulma/layout/Section/Section';
import Container from './components/bulma/layout/Container/Container';

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <TopBar />
      <Section>
        <Container fluid>
          <div className="columns">
            <div className="column is-one-quarter">
              <Menu />
            </div>
            <div className="column">
              <Routes />
            </div>
          </div>
        </Container>
      </Section>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
