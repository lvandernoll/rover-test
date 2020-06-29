import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { AppLayout } from './layout/App/AppLayout';
import Home from './pages/Home/Home';
import { AdminLayout } from './layout/Admin/AdminLayout';

const adminPrefix = '/admin';

function getAdminPath(url?: string): string {
  return adminPrefix + url;
}

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/login">
          <p>Login page</p>
        </Route>

        <Route path={getAdminPath('/:path?')} exact>
          <AdminLayout>
            <Switch>
              <Route path={getAdminPath('/')} exact>
                <p>Hi Admin</p>
              </Route>
            </Switch>
          </AdminLayout>
        </Route>

        <Route>
          <AppLayout>
            <Switch>
              <Route path="/" exact>
                <Home />
              </Route>
            </Switch>
          </AppLayout>
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

export default App;
