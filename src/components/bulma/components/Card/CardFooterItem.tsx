import React, { ReactNode } from 'react';
import classnames from 'classnames';

const CardFooterItem: React.FC = ({ children }) => (
  <>
    {React.Children.map(children, (child: ReactNode) => {
      if (React.isValidElement(child)) {
        return React.cloneElement(child, {
          className: classnames(child.props.className, 'card-footer-item'),
        });
      } else {
        return <div className="card-footer-item">{child}</div>;
      }
    })}
  </>
);

export default CardFooterItem;
