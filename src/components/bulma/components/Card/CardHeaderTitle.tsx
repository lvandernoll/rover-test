import React from 'react';
import classnames from 'classnames';

interface CardHeaderTitleProps {
  centered?: boolean;
}

const CardHeaderTitle: React.FC<CardHeaderTitleProps> = ({
  centered = false,
  children,
}) => (
  <p className={classnames('card-header-title', { 'is-centered': centered })}>
    {children}
  </p>
);

export default CardHeaderTitle;
