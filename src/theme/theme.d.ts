import 'styled-components';
import { BlogTheme } from './blog';

declare module 'styled-components' {
  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  export interface DefaultTheme extends BlogTheme {}
}
