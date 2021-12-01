import { ReactNode } from 'react';
import { ThemeProvider as SCThemeProvider } from 'styled-components';
import { colors } from './colors';
import { typography } from './typography';

const theme = { colors, typography } as const;
export type BlogTheme = typeof theme;

type Props = {
  children: ReactNode;
};
export function ThemeProvider({ children }: Props) {
  return <SCThemeProvider theme={theme}>{children}</SCThemeProvider>;
}
