import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from '../pages/Home/Home';

const Routes: React.FC = () => {
  return (
    <Switch>
      <Route path="/" exact>
        <Home />
      </Route>
    </Switch>
  );
};

export default Routes;
