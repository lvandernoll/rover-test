import React from 'react';
import classnames from 'classnames';

interface FieldProps {
  isGrouped?: boolean;
  hasAddons?: boolean;
}

const Field: React.FC<FieldProps> = ({
  children,
  isGrouped = false,
  hasAddons = false,
}) => (
  <div
    className={classnames('field', {
      'is-grouped': isGrouped,
      'has-addons': hasAddons,
    })}
  >
    {children}
  </div>
);

export default Field;