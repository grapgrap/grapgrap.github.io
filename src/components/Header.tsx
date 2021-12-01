import { ReactElement } from 'react';
import styled from 'styled-components';

export function Header(): ReactElement {
  return <Container></Container>;
}

const Container = styled.header`
  display: flex;
  flex-direction: row;
`;
