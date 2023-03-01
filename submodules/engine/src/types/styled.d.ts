import 'styled-components';
import type { TTheme } from '@mobk/design-system';

declare module 'styled-components' {
  export interface DefaultTheme extends TTheme {}
}
