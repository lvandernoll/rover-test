import React from 'react';
import classnames from 'classnames';
import Tag from './Tag';

interface TagsProps {
  hasAddons?: boolean;
  size?: Size;
}

const sizeMap = {
  normal: '',
  medium: 'are-medium',
  large: 'are-large',
} as const;

type Size = keyof typeof sizeMap;

const Tags: React.FC<TagsProps> = ({
  hasAddons = false,
  size = 'normal',
  children,
}) => (
  <div
    className={classnames('tags', sizeMap[size], {
      'has-addons': hasAddons,
    })}
  >
    {children}
  </div>
);

export { Tags, Tag };
