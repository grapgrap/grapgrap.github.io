import React, { ReactElement, ReactNode } from 'react';
import styled from 'styled-components';
import { Footer } from './Footer';
import { Header } from './Header';

type Props = {
  children?: ReactNode;
};

export function CommonLayout({ children }: Props): ReactElement {
  return (
    <>
      <Header />
      <Contents>{children}</Contents>
      <Footer />
    </>
  );
}

const Contents = styled.main``;
