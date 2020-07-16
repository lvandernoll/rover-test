import React from 'react';
import classnames from 'classnames';

const sizeClassMap = {
  normal: '',
  medium: 'is-medium',
  large: 'is-large',
} as const;

type SectionSize = keyof typeof sizeClassMap;

type SectionProps = {
  size?: SectionSize;
};

function getSizeClassName(size: SectionSize): string {
  return sizeClassMap[size];
}

const Section: React.FC<SectionProps> = ({ children, size = 'normal' }) => {
  return (
    <div className={classnames('section', getSizeClassName(size))}>
      {children}
    </div>
  );
};

export default Section;
