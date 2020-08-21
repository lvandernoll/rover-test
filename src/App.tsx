import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import AppLayout from 'layouts/App';
import AdminLayout from 'layouts/Admin';
import PlayerLayout from 'layouts/Player';
import Docs from 'pages/General/Docs';
import AdminAssignmentList from 'pages/Admin/AssignmentList';
import AcceptedAssignmentList from 'pages/Player/AcceptedAssignmentList';
import PlayerAssignmentList from 'pages/Player/AssignmentList';
import CreateAssignment from 'pages/Admin/CreateAssignment';
import Login from 'pages/Login';
import requireAuth from 'requireAuth';
import { selectUserState } from 'redux/selectors';
import { useSelector } from 'react-redux';
import ReportList from 'pages/Admin/ReportList';

const adminPrefix = '/admin';

export const getAdminPath = (url?: string): string => {
  return adminPrefix + url;
};

const App: React.FC = () => {
  const token = useSelector(selectUserState).token;

  return (
    <BrowserRouter>
      <Switch>
        <Route path="/login">{token ? <Redirect to="/" /> : <Login />}</Route>

        <Route path="/docs">
          <AppLayout>
            <Docs />
          </AppLayout>
        </Route>

        <Route path={getAdminPath('/:path?')} exact>
          <AdminLayout>
            <Switch>
              <Route
                exact
                path={getAdminPath('/')}
                component={requireAuth(AdminAssignmentList)}
              />
              <Route
                exact
                path={getAdminPath('/create-assignment')}
                component={requireAuth(CreateAssignment)}
              />
              <Route
                exact
                path={getAdminPath('/reports')}
                component={requireAuth(ReportList)}
              />
            </Switch>
          </AdminLayout>
        </Route>
        <Route>
          <PlayerLayout>
            <Switch>
              <Route
                exact
                path="/"
                component={requireAuth(PlayerAssignmentList)}
              />
              <Route
                exact
                path="/accepted-assignments"
                component={requireAuth(AcceptedAssignmentList)}
              />
              <Route exact path="/docs" component={Docs} />
            </Switch>
          </PlayerLayout>
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

export default App;
