import React from 'react';
import classnames from 'classnames';
import {
  Size,
  TextColor,
  sizeMap,
  textColorMap,
} from 'components/bulma/options';

type IconProps = {
  size?: Size;
  color?: TextColor;
};

const IconContainer: React.FC<IconProps> = ({
  size = 'normal',
  color = 'normal',
  children,
}) => (
  <span className={classnames('icon', sizeMap[size], textColorMap[color])}>
    {children}
  </span>
);

export default IconContainer;
