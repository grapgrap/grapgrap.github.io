import { ReactNode } from 'react';
import { ThemeProvider as SCThemeProvider } from 'styled-components';
import { colors } from './colors';

const theme = {
  colors,
};

export type BlogTheme = typeof theme;

type Props = {
  children: ReactNode;
};
export function ThemeProvider({ children }: Props) {
  return <SCThemeProvider theme={theme}>{children}</SCThemeProvider>;
}
