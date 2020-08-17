import React from 'react';
import classnames from 'classnames';

type ColumnGrid = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;

interface Props {
  size?: ColumnGrid;
  sizeMobile?: ColumnGrid;
  sizeTablet?: ColumnGrid;
  sizeDesktop?: ColumnGrid;
  sizeWidescreen?: ColumnGrid;
  sizeFullHD?: ColumnGrid;
  offset?: ColumnGrid;
  narrow?: boolean;
  narrowMobile?: boolean;
  narrowTablet?: boolean;
  narrowTouch?: boolean;
  narrowDesktop?: boolean;
  narrowWidescreen?: boolean;
  narrowFullHD?: boolean;
}

const Column: React.FC<Props> = ({
  size,
  sizeMobile,
  sizeTablet,
  sizeDesktop,
  sizeWidescreen,
  sizeFullHD,
  offset,
  narrow,
  narrowMobile,
  narrowTablet,
  narrowTouch,
  narrowDesktop,
  narrowWidescreen,
  narrowFullHD,
  children,
}) => {
  const getColumnSize = (
    res: string,
    size?: ColumnGrid,
    offset?: boolean,
  ): string =>
    size ? `is-${offset ? 'offset-' : ''}${size}${res ? `-${res}` : ''}` : '';

  return (
    <div
      className={classnames(
        'column',
        getColumnSize('', size),
        getColumnSize('', offset, true),
        getColumnSize('mobile', sizeMobile),
        getColumnSize('tablet', sizeTablet),
        getColumnSize('desktop', sizeDesktop),
        getColumnSize('widescreen', sizeWidescreen),
        getColumnSize('fullhd', sizeFullHD),
        {
          'is-narrow': narrow,
          'is-narrow-mobile': narrowMobile,
          'is-narrow-tablet': narrowTablet,
          'is-narrow-touch': narrowTouch,
          'is-narrow-desktop': narrowDesktop,
          'is-narrow-widescreen': narrowWidescreen,
          'is-narrow-fullhd': narrowFullHD,
        },
      )}
    >
      {children}
    </div>
  );
};

export default Column;
