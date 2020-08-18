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
  errors?: FieldError;
}

const showErrorMessage = (errors: FieldError) => {
  switch (errors.type) {
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
      return errors.message;
    default:
      return '';
  }
};

const Error: FC<Props> = ({ state, errors }) => (
  <p className={classNames('help', stateMap[state])}>
    {errors && showErrorMessage(errors)}
  </p>
);

export default Error;
