import React from 'react';
import { Field } from 'components/bulma/elements';

interface LabelProps {
  htmlFor: string;
}
const Label: React.FC<LabelProps> = ({ children, htmlFor }) => (
  <Field>
    <label className="control" htmlFor={htmlFor}>
      {children}
    </label>
  </Field>
);

export default Label;
