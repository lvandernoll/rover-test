import React from 'react';
import classnames from 'classnames';
import CardImage from './CardImage';
import CardHeader from './CardHeader';
import CardHeaderTitle from './CardHeaderTitle';
import CardHeaderIcon from './CardHeaderIcon';
import CardContent from './CardContent';
import CardFooter from './CardFooter';
import CardFooterItem from './CardFooterItem';

type CardProps = {
  className?: string;
};

const Card: React.FC<CardProps> = ({ className, children }) => (
  <div className={classnames('card', className)}>{children}</div>
);

export {
  Card,
  CardImage,
  CardHeader,
  CardHeaderTitle,
  CardHeaderIcon,
  CardContent,
  CardFooter,
  CardFooterItem,
};
