import React from 'react';
import { BrowserRouter, Switch, Route, Link, Redirect } from 'react-router-dom';
import { AppLayout } from 'layout/App/AppLayout';
import Home from 'pages/Home/Home';
import Login from 'pages/Login/Login';
import CreateAssignment from 'pages/createAssignment/createAssignment';
import { AdminLayout } from 'layout/Admin/AdminLayout';
import { IconContainer } from 'components/bulma/elements';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlusCircle } from '@fortawesome/free-solid-svg-icons';
import requireAuth from 'requireAuth';

const adminPrefix = '/admin';

function getAdminPath(url?: string): string {
  return adminPrefix + url;
}

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/login">
          {localStorage.getItem('token') ? <Redirect to="/" /> : <Login />}
        </Route>

        <Route path={getAdminPath('/:path?')} exact>
          <AdminLayout>
            <Switch>
              <Route path={getAdminPath('/')} exact>
                <p>Hi Admin</p>
                <IconContainer>
                  <Link to={getAdminPath('/create-assignment')}>
                    <FontAwesomeIcon size="2x" icon={faPlusCircle} />
                  </Link>
                </IconContainer>
              </Route>
              {/* old */}
              {/* <Route path={getAdminPath('/create-assignment')} exact component={CreateAssignment} /> */}
              {/* new */}
              {/* <ProtectedRoute path={getAdminPath('/create-assignment')} exact component={CreateAssignment} /> */}
              {/* new 2 */}
              <Route
                path={getAdminPath('/create-assignment')}
                exact
                component={requireAuth(CreateAssignment)}
              />
              {/* <PrivateRoute path={getAdminPath('/create-assignment')} exact component={CreateAssignment} /> */}
              {/*  */}
            </Switch>
          </AdminLayout>
        </Route>

        <Route>
          <AppLayout>
            <Switch>
              <Route path="/" exact component={requireAuth(Home)} />
            </Switch>
          </AppLayout>
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

export default App;
