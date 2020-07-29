const baseSizeMap = {
  normal: '',
  medium: 'is-medium',
  large: 'is-large',
} as const;

const sizeMap = {
  small: 'is-small',
  ...baseSizeMap,
};

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

export { baseSizeMap, sizeMap, colorMap, textColorMap };

export type BaseSize = keyof typeof baseSizeMap;
export type Size = keyof typeof sizeMap;
export type Color = keyof typeof colorMap;
export type TextColor = keyof typeof textColorMap;
