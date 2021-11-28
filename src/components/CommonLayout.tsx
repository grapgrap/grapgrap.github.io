import React, { ReactElement, ReactNode } from 'react';
import { GlobalStyle } from '../theme/GlobalStyle';
import { Footer } from './Footer';
import { Header } from './Header';

type Props = {
  children?: ReactNode;
};

export function CommonLayout({ children }: Props): ReactElement {
  return (
    <>
      <GlobalStyle />
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
}
