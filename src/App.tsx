import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import { AppLayout } from 'layout/App/AppLayout';
import Login from 'pages/Login';
import Home from 'pages/Home';
import CreateAssignment from 'pages/CreateAssignment';
import { AdminLayout } from 'layout/Admin/AdminLayout';
import requireAuth from 'requireAuth';
import { userState } from 'redux/selectors';
import { useSelector } from 'react-redux';
import Docs from 'pages/Docs';
import { getAdminPath } from 'utils/getAdminPath';
import AdminHome from 'pages/AdminHome';

const App: React.FC = () => {
  const token = useSelector(userState).token;

  return (
    <BrowserRouter>
      <Switch>
        <Route path="/login">{token ? <Redirect to="/" /> : <Login />}</Route>
        <Route path={getAdminPath('/:path?')} exact>
          <AdminLayout>
            <Switch>
              <Route
                path={getAdminPath('/')}
                exact
                component={requireAuth(AdminHome)}
              />
              <Route
                path={getAdminPath('/create-assignment')}
                exact
                component={requireAuth(CreateAssignment)}
              />
            </Switch>
          </AdminLayout>
        </Route>
        <Route>
          <AppLayout>
            <Switch>
              <Route path="/" exact component={requireAuth(Home)} />
              <Route path="/docs" component={Docs} />
            </Switch>
          </AppLayout>
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

export default App;
