import React from 'react';
import classnames from 'classnames';
import Control from './Control';
import { Size, TextColor, Grid } from 'components/bulma/options';

type FormProps = {
  className?: string;
  size?: Size;
  color?: TextColor;
  grid?: Grid;
  onSubmit?: () => void;
};

const Form: React.FC<FormProps> = ({ className, children, onSubmit }) => {
  return (
    <form onSubmit={onSubmit} className={classnames('block', className)}>
      {children}
    </form>
  );
};

export { Form, Control };
