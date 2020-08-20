import React, { FC } from 'react';
import classNames from 'classnames';
import { FieldError } from 'react-hook-form';

const stateMap = {
  error: 'is-danger',
  success: 'is-success',
} as const;

type State = keyof typeof stateMap;

interface Props {
  state: State;
  error?: FieldError;
  className?: string;
}

const showErrorMessage = (error: FieldError) => {
  switch (error.type) {
    case 'required':
      return 'Field is required.';
    case 'min':
      return 'Your input required more characters';
    case 'minLength':
      return 'Your input required more characters';
    case 'maxLength':
      return 'Your input exceed maxLength';
    case 'max':
      return 'Your input exceed maxLength';
    case 'pattern':
      return error.message;
    default:
      return '';
  }
};

const Error: FC<Props> = ({ state, error, className }) => (
  <p className={classNames('help', stateMap[state], className)}>
    {error && showErrorMessage(error)}
  </p>
);

export default Error;
