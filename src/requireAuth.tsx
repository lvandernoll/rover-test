import React from 'react';
import { Redirect } from 'react-router-dom';

export default (ComposedComponent: React.FC): React.FC => {
  const Authenticate: React.FC = () => {
    if (localStorage.token) {
      return <ComposedComponent />;
    } else {
      return <Redirect to="/login" />;
    }
  };
  return Authenticate;
};

// interface IPrivateRouteProps extends RouteProps {
//     isAuth: boolean // is authenticate route
//     redirectPath: string // redirect path if don't authenticate route
//   }
// export const PrivateRoute: React.FC<RouteProps> = (props) => {
//    return localStorage.token ? (
//     <Route {...props} render={() => props.component} />
//   ) : (
//     <Redirect to={'/login'} />
//   )
// }
