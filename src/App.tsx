import React from 'react';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';
import { AppLayout } from 'layout/App/AppLayout';
import Home from 'pages/Home/Home';
import CreateAssignment from 'pages/createAssignment/createAssignment';
import { AdminLayout } from 'layout/Admin/AdminLayout';
import { IconContainer } from 'components/bulma/elements';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlusCircle } from '@fortawesome/free-solid-svg-icons';

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
                <IconContainer>
                  <Link to={getAdminPath('/create-assignment')}>
                    <FontAwesomeIcon size="2x" icon={faPlusCircle} />
                  </Link>
                </IconContainer>
              </Route>
              <Route path={getAdminPath('/create-assignment')} exact>
                <CreateAssignment />
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
