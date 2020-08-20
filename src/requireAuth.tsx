import React from 'react';
import { Redirect } from 'react-router-dom';
import { selectToken } from 'redux/selectors';
import { useSelector } from 'react-redux';

export default (ComposedComponent: React.FC): React.FC => {
  const token = useSelector(selectToken);

  const Authenticate: React.FC = () => {
    if (token) {
      return <ComposedComponent />;
    } else {
      return <Redirect to="/login" />;
    }
  };
  return Authenticate;
};
