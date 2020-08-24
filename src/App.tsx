import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import AppLayout from 'layouts/App';
import Docs from 'pages/General/Docs';
import Main from 'pages/General/Main';

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Switch>
        <AppLayout>
          <Route path="/" component={Main} />
          <Route path="/docs" component={Docs} />
        </AppLayout>
      </Switch>
    </BrowserRouter>
  );
};

export default App;
