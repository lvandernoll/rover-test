import React from 'react';
import classnames from 'classnames';
import { baseSizeMap, BaseSize } from 'components/bulma/options';

type SectionProps = {
  size?: BaseSize;
};

const Section: React.FC<SectionProps> = ({ size = 'normal', children }) => (
  <section className={classnames('section', baseSizeMap[size])}>
    {children}
  </section>
);

export default Section;
