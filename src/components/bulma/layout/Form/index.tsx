import React from 'react';
import classnames from 'classnames';
import Control from './Control';

type FormProps = {
  className?: string;
};

const Form: React.FC<FormProps> = ({ className, children }) => (
  <form
    className={classnames('block', className)}
    onSubmit={(e) => e.preventDefault()}
  >
    {children}
  </form>
);

export { Form, Control };
