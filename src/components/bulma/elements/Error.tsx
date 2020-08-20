import React from 'react';
import classNames from 'classnames';
import { FieldError } from 'react-hook-form';
import { DeepMap } from 'react-hook-form/dist/types/utils';

const stateMap = {
  error: 'is-danger',
  success: 'is-success',
} as const;

type State = keyof typeof stateMap;

interface Props<T> {
  state: State;
  errors: DeepMap<T, FieldError>;
  name: string;
  className?: string;
}

const showErrorMessage = (errors: any, name: string) => {
  switch (errors[name]?.type) {
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
      return errors[name];
    default:
      return '';
  }
};

const Error = <T extends Record<string, unknown>>({
  state,
  errors,
  name,
  className,
}: Props<T>) => (
  <p className={classNames('help', stateMap[state], className)}>
    {errors && showErrorMessage(errors, name)}
  </p>
);

export default Error;
