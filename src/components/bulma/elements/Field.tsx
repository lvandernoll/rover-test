import React from 'react';
import classnames from 'classnames';

interface FieldProps {
  isGrouped?: boolean;
  groupCentered?: boolean;
  hasAddons?: boolean;
}

const Field: React.FC<FieldProps> = ({
  children,
  isGrouped = false,
  groupCentered = false,
  hasAddons = false,
}) => (
  <div
    className={classnames('field', {
      'is-grouped': isGrouped,
      'is-grouped-centered': groupCentered,
      'has-addons': hasAddons,
    })}
  >
    {children}
  </div>
);

export default Field;
