import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import AdminLayout from 'layouts/Admin';
import PlayerLayout from 'layouts/Player';
import Docs from 'pages/General/Docs';
import AdminAssignmentList from 'pages/Admin/AssignmentList';
import CreateAssignment from 'pages/Admin/CreateAssignment';
import AcceptedAssignmentList from 'pages/Player/AcceptedAssignmentList';
import PlayerAssignmentList from 'pages/Player/AssignmentList';
import AppLayout from 'layouts/App';

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

        <AppLayout>
          <Switch>
            <Route path={getAdminPath('/:path?')} exact>
              <AdminLayout>
                <Switch>
                  <Route path={getAdminPath('/')} exact>
                    <AdminAssignmentList />
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
                    <PlayerAssignmentList />
                  </Route>
                  <Route path="/accepted-assignments" exact>
                    <AcceptedAssignmentList />
                  </Route>
                </Switch>
              </PlayerLayout>
            </Route>
          </Switch>
        </AppLayout>
      </Switch>
    </BrowserRouter>
  );
};

export default App;
