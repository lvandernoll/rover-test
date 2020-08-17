import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { PlayerLayout } from 'layout/Player/PlayerLayout';
import AssignmentList from 'pages/AssignmentList';
import CreateAssignment from 'pages/CreateAssignment';
import { AdminLayout } from 'layout/Admin/AdminLayout';
import Docs from 'pages/Docs';
import AcceptedAssignmentList from 'pages/AcceptedAssignmentList';

const adminPrefix = '/admin';

export const getAdminPath = (url?: string): string => {
  return adminPrefix + url;
};

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
                <AssignmentList role="ADMIN" />
              </Route>
              <Route path={getAdminPath('/create-assignment')} exact>
                <CreateAssignment />
              </Route>
            </Switch>
          </AdminLayout>
        </Route>

        <Route>
          <PlayerLayout>
            <Switch>
              <Route path="/docs" component={Docs} />
              <Route path="/" exact>
                <AssignmentList role="PLAYER" />
              </Route>
              <Route path="/accepted-assignments" exact>
                <AcceptedAssignmentList />
              </Route>
            </Switch>
          </PlayerLayout>
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

export default App;
