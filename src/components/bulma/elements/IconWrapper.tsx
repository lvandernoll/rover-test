import React from 'react';
import classnames from 'classnames';
import {
  sizeMap,
  textColorMap,
  Size,
  TextColor,
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
