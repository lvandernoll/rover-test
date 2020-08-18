import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import AppLayout from 'layouts/App';
import AdminLayout from 'layouts/Admin';
import PlayerLayout from 'layouts/Player';
import Docs from 'pages/General/Docs';
import AdminAssignmentList from 'pages/Admin/AssignmentList';
import CreateAssignment from 'pages/Admin/CreateAssignment';
import AcceptedAssignmentList from 'pages/Player/AcceptedAssignmentList';
import PlayerAssignmentList from 'pages/Player/AssignmentList';
import ReportList from 'pages/Admin/ReportList';

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

        <Route path="/docs">
          <AppLayout>
            <Docs />
          </AppLayout>
        </Route>

        <Route path={getAdminPath('/:path?')} exact>
          <AdminLayout>
            <Switch>
              <Route path={getAdminPath('/')} exact>
                <AdminAssignmentList />
              </Route>
              <Route path={getAdminPath('/create-assignment')} exact>
                <CreateAssignment />
              </Route>
              <Route path={getAdminPath('/reports')} exact>
                <ReportList />
              </Route>
            </Switch>
          </AdminLayout>
        </Route>

        <Route>
          <PlayerLayout>
            <Switch>
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
    </BrowserRouter>
  );
};

export default App;
