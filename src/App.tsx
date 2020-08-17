import React from 'react';
import { BrowserRouter, Switch, Route, Link, Redirect } from 'react-router-dom';
import { AppLayout } from 'layout/App/AppLayout';
import Login from 'pages/Login';
import Home from 'pages/Home';
import CreateAssignment from 'pages/CreateAssignment';
import { AdminLayout } from 'layout/Admin/AdminLayout';
import { IconContainer } from 'components/bulma/elements';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlusCircle } from '@fortawesome/free-solid-svg-icons';
import requireAuth from 'requireAuth';
import { userState } from 'redux/selectors';
import { useSelector } from 'react-redux';
import Docs from 'pages/Docs';

const adminPrefix = '/admin';

function getAdminPath(url?: string): string {
  return adminPrefix + url;
}

const App: React.FC = () => {
  const token = useSelector(userState).token;

  return (
    <BrowserRouter>
      <Switch>
        <Route path="/login">{token ? <Redirect to="/" /> : <Login />}</Route>

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
