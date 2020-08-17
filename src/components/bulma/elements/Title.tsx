import React from 'react';
import classnames from 'classnames';

interface TitleProps {
  as?: HeadingType;
  styledAs?: HeadingType;
}

const headingMap = {
  h1: 'is-1',
  h2: 'is-2',
  h3: 'is-3',
  h4: 'is-4',
  h5: 'is-5',
  h6: 'is-6',
} as const;

type HeadingType = keyof typeof headingMap;

const Title: React.FC<TitleProps> = ({
  as = 'h3',
  styledAs = 'h3',
  children,
}) =>
  React.createElement(
    as,
    { className: classnames('title', headingMap[styledAs]) },
    [children],
  );

export default Title;
