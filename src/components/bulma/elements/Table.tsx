import React, { TableHTMLAttributes, FC } from 'react';
import classnames from 'classnames';

type TableComponent<P> = FC<P> & {
  Row: FC<RowProps>;
};

interface TableProps extends TableHTMLAttributes<HTMLTableElement> {
  bordered?: boolean;
  striped?: boolean;
  narrow?: boolean;
  hoverable?: boolean;
  fullWidth?: boolean;
}

interface RowProps extends TableHTMLAttributes<HTMLTableElement> {
  selected?: boolean;
  onClick?: () => void;
}

const Table: TableComponent<TableProps> = ({
  bordered,
  striped,
  narrow,
  hoverable,
  fullWidth,
  children,
  ...props
}) => (
  <table
    className={classnames('table', {
      'is-bordered': bordered,
      'is-striped': striped,
      'is-narrow': narrow,
      'is-hoverable': hoverable,
      'is-fullwidth': fullWidth,
    })}
    {...props}
  >
    {children}
  </table>
);

Table.Row = ({ selected, onClick, children }) => (
  <tr className={classnames({ 'is-selected': selected })} onClick={onClick}>
    {children}
  </tr>
);

export default Table;
