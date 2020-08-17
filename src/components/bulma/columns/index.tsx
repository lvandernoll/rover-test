import React from 'react';
import classnames from 'classnames';
import Column from './Column';

type GapSize = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8;

interface Props {
  mobile?: boolean;
  desktop?: boolean;
  multiline?: boolean;
  variable?: boolean;
  centered?: boolean;
  vCentered?: boolean;
  gapless?: boolean;
  gap?: GapSize;
  gapMobile?: GapSize;
  gapTablet?: GapSize;
  gapDesktop?: GapSize;
  gapWidescreen?: GapSize;
  gapFullHD?: GapSize;
}

const Columns: React.FC<Props> = ({
  mobile,
  desktop,
  multiline,
  variable,
  centered,
  vCentered,
  gapless,
  gap,
  gapMobile,
  gapTablet,
  gapDesktop,
  gapWidescreen,
  gapFullHD,
  children,
}) => {
  const getGapSize = (res: string, size?: GapSize): string =>
    size ? `is-${size}${res ? `-${res}` : ''}` : '';

  return (
    <div
      className={classnames(
        'columns',
        getGapSize('', gap),
        getGapSize('mobile', gapMobile),
        getGapSize('tablet', gapTablet),
        getGapSize('desktop', gapDesktop),
        getGapSize('widescreen', gapWidescreen),
        getGapSize('fullhd', gapFullHD),
        {
          'is-vcentered': vCentered,
          'is-centered': centered,
          'is-mobile': mobile,
          'is-desktop': desktop,
          'is-gapless': gapless,
          'is-multiline': multiline,
          'is-variable': variable,
        },
      )}
    >
      {children}
    </div>
  );
};

export { Columns, Column };
