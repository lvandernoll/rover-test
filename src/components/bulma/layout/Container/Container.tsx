import React from 'react';
import classnames from 'classnames';

type ContainerProps = {
  fluid?: boolean;
};

const Container: React.FC<ContainerProps> = ({ children, fluid = false }) => {
  return (
    <div className={classnames('container', { 'is-fluid': fluid })}>
      {children}
    </div>
  );
};

export default Container;
