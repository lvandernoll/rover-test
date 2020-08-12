const baseSizeMap = {
  normal: '',
  medium: 'is-medium',
  large: 'is-large',
} as const;

const sizeMap = {
  small: 'is-small',
  ...baseSizeMap,
} as const;

const colorMap = {
  normal: '',
  black: 'is-black',
  dark: 'is-dark',
  light: 'is-light',
  white: 'is-white',
  primary: 'is-primary',
  link: 'is-link',
  info: 'is-info',
  success: 'is-success',
  warning: 'is-warning',
  danger: 'is-danger',
} as const;

const textColorMap = {
  normal: '',
  black: 'has-text-black',
  dark: 'has-text-dark',
  light: 'has-text-light',
  white: 'has-text-white',
  primary: 'has-text-primary',
  link: 'has-text-link',
  info: 'has-text-info',
  success: 'has-text-success',
  warning: 'has-text-warning',
  danger: 'has-text-danger',
} as const;

const textAlignmentMap = {
  centerd: 'has-text-centered',
  justified: 'has-text-justified',
  left: 'has-text-left',
  right: 'has-text-right',
} as const;

const gridMap = {
  grid: 'columns',
  gridCentered: 'columns is-centered',
  centered: 'is-half is-offset-one-quarter',
  centeredOneThird: 'is-one-third is-offset-one-third',
  centeredOneFifth: 'is-three-fifths is-offset-one-fifth',
  centeredHalf: 'is-half is-offset-half',
} as const;

export {
  baseSizeMap,
  sizeMap,
  colorMap,
  textColorMap,
  gridMap,
  textAlignmentMap,
};

export type BaseSize = keyof typeof baseSizeMap;
export type Size = keyof typeof sizeMap;
export type Color = keyof typeof colorMap;
export type TextColor = keyof typeof textColorMap;
export type Grid = keyof typeof gridMap;
export type TextAlignment = keyof typeof textAlignmentMap;
