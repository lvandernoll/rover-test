import React from 'react';
import { Redirect } from 'react-router-dom';
import { userState } from 'redux/selectors';
import { useSelector } from 'react-redux';

export default (ComposedComponent: React.FC): React.FC => {
  const token = useSelector(userState).token;

  const Authenticate: React.FC = () => {
    if (token) {
      return <ComposedComponent />;
    } else {
      return <Redirect to="/login" />;
    }
  };
  return Authenticate;
};
