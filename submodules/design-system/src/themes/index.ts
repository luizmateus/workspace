import borderRadius from './border/borderRadius';
import borderWidth from './border/borderWidth';
import colors from './color/colors';
import fonts from './font/fonts';
import fontSizes from './font/fontSize';
import spacingInline from './spacing/spacingInline';
import spacingInset from './spacing/spacingInset';
import spacingSquish from './spacing/spacingSquish';
import spacingStack from './spacing/spacingStack';
import { extendTheme } from 'native-base';

export const theme = extendTheme({
  borderRadius,
  borderWidth,
  colors,
  fonts,
  fontSizes,
  spacingInline,
  spacingInset,
  spacingSquish,
  spacingStack,
});

export type TTheme = typeof theme;
export type TBorderRadius = keyof typeof borderRadius;
export type TBorderWidht = keyof typeof borderWidth;
export type TColors = keyof typeof colors;
export type TFonts = keyof typeof fonts;
export type TFontSize = keyof typeof fontSizes;
export type TSpacingInline = keyof typeof spacingInline;
export type TSpacingInset = keyof typeof spacingInset;
export type TSpacingSquish = keyof typeof spacingSquish;
export type TSpacingStack = keyof typeof spacingStack;
