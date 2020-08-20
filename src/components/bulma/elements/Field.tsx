import React from 'react';
import classnames from 'classnames';

interface FieldProps {
  isGrouped?: boolean;
  hasAddons?: boolean;
  isCentered?: boolean;
}

const Field: React.FC<FieldProps> = ({
  children,
  isGrouped = false,
  hasAddons = false,
  isCentered = false,
}) => (
  <div
    className={classnames('field', {
      'is-grouped': isGrouped,
      'has-addons': hasAddons,
      'is-centered': isCentered,
    })}
  >
    {children}
  </div>
);

export default Field;
