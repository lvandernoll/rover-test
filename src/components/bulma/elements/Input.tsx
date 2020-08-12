import React, { forwardRef, InputHTMLAttributes } from 'react';
import classNames from 'classnames';
import { colorMap, sizeMap, Size, Color } from 'components/bulma/options';

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  inputColor: Color;
  inputSize: Size;
}

const Input = forwardRef<HTMLInputElement, Props>(
  ({ inputSize, inputColor, ...props }, forwardedRef) => {
    return (
      <input
        className={classNames(
          'input',
          sizeMap[inputSize],
          colorMap[inputColor],
        )}
        ref={forwardedRef}
        {...props}
      />
    );
  },
);

export default Input;
