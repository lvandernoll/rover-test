import React from 'react';
import classnames from 'classnames';

type ContainerProps = {
  fluid?: boolean;
  fullHD?: boolean;
  widescreen?: boolean;
};

const Container: React.FC<ContainerProps> = ({
  children,
  fluid,
  fullHD,
  widescreen,
}) => {
  return (
    <div
      className={classnames('container', {
        'is-fluid': fluid,
        'is-fullhd': fullHD,
        'is-widescreen': widescreen,
      })}
    >
      {children}
    </div>
  );
};

export default Container;
