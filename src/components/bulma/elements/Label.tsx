import React from 'react';

interface LabelProps {
  htmlFor: string;
}
const Label: React.FC<LabelProps> = ({ children, htmlFor }) => (
  <label className="label" htmlFor={htmlFor}>
    {children}
  </label>
);

export default Label;
