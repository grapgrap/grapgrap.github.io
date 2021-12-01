import React, { ReactElement, ReactNode } from 'react';
import { Footer } from './Footer';
import { Header } from './Header';

type Props = {
  children?: ReactNode;
};

export function CommonLayout({ children }: Props): ReactElement {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
}
