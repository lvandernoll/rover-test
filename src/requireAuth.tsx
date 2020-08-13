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
