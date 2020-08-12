import React, { useEffect, useState } from 'react';
import { Route, RouteProps } from 'react-router-dom';
import Login from 'pages/Login/Login';

// export interface IPrivateRouteProps  {
//   isAuth: boolean // is authenticate route
//   redirectPath: string // redirect path if don't authenticate route
// }
// const PrivateRoute: React.FC<RouteProps> = (props) => {
//    return props.isAuth ? (
//     <Route {...props} component={props.component} render={undefined} />
//   ) : (
//     <Redirect to={{pathname: props.redirectPath}} />
//   )
