import { forwardRef, InputHTMLAttributes, createElement } from 'react';
import classNames from 'classnames';
import { colorMap, sizeMap, Size, Color } from 'components/bulma/options';
import { FieldError } from 'react-hook-form';

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  inputColor?: Color;
  inputSize?: Size;
  error?: FieldError;
  as?: 'input' | 'textarea';
}

const Input = forwardRef<HTMLInputElement, Props>(
  (
    {
      inputSize = 'normal',
      inputColor = 'normal',
      error,
      as = 'input',
      ...props
    },
    forwardedRef,
  ) => {
    return createElement(as, {
      className: classNames(as, sizeMap[inputSize], colorMap[inputColor], {
        'is-danger': error,
      }),
      ref: forwardedRef,
      style: as === 'textarea' ? { resize: 'none' } : null,
      ...props,
    });
  },
);

export default Input;
