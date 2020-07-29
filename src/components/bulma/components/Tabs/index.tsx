import React from 'react';
import classnames from 'classnames';
import Tab from './Tab';

const sizeClassMap = {
  small: 'is-small',
  normal: '',
  medium: 'is-medium',
  large: 'is-large',
} as const;

type Size = keyof typeof sizeClassMap;

type TabsProps = {
  size?: Size;
};

const Tabs: React.FC<TabsProps> = ({ size = 'normal', children }) => (
  <div className={classnames('tabs is-boxed mb-0', sizeClassMap[size])}>
    <ul>{children}</ul>
  </div>
);

export { Tabs, Tab };
