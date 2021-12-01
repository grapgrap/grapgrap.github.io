import { GatsbyBrowser } from 'gatsby';
import React from 'react';
import { GlobalStyle, ThemeProvider } from '../theme';
import { CommonLayout } from './CommonLayout';

export const WrapElement: GatsbyBrowser['wrapRootElement'] = ({ element }) => {
  return (
    <ThemeProvider>
      <GlobalStyle />
      <CommonLayout>{element}</CommonLayout>
    </ThemeProvider>
  );
};
