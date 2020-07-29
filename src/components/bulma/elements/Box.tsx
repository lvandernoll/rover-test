import React from 'react';

interface BoxProps {
  withTabs?: boolean;
}

const Box: React.FC<BoxProps> = ({ withTabs = false, children }) => (
  <div
    className="box"
    style={withTabs ? { borderTopLeftRadius: 0, borderTopRightRadius: 0 } : {}}
  >
    {children}
  </div>
);

export default Box;
