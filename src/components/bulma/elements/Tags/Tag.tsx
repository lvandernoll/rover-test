import React from 'react';
import classnames from 'classnames';
import {
  baseSizeMap,
  colorMap,
  BaseSize,
  Color,
} from 'components/bulma/options';

interface TagProps {
  color?: Color;
  light?: boolean;
  size?: BaseSize;
  rounded?: boolean;
  deleteCross?: boolean;
  className?: string;
  onClick?: () => void;
}

const Tag: React.FC<TagProps> = ({
  color = 'normal',
  light = false,
  size = 'normal',
  rounded = false,
  deleteCross = false,
  className,
  onClick,
  children,
}) => {
  return React.createElement(
    onClick ? 'a' : 'span',
    {
      className: classnames(
        'tag',
        className,
        colorMap[color],
        baseSizeMap[size],
        {
          'is-light': light,
          'is-rounded': rounded,
          'is-delete': deleteCross,
        },
      ),
      onClick,
    },
    [children],
  );
};

export default Tag;
