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
  onClick?: () => void;
}

const Tag: React.FC<TagProps> = ({
  color = 'normal',
  light = false,
  size = 'normal',
  rounded = false,
  deleteCross = false,
  onClick,
  children,
}) => {
  return React.createElement(
    onClick ? 'a' : 'span',
    {
      className: classnames('tag', colorMap[color], baseSizeMap[size], {
        'is-light': light,
        'is-rounded': rounded,
        'is-delete': deleteCross,
      }),
      onClick,
    },
    [children],
  );
};

export default Tag;
