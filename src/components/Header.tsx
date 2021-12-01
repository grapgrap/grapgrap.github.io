import { ReactElement } from 'react';
import styled from 'styled-components';

export function Header(): ReactElement {
  return (
    <Container>
      <Title>grapgrap --dev</Title>
    </Container>
  );
}

const Title = styled.h3``;

const Container = styled.header`
  display: flex;
  flex-direction: row;
  background-color: ${({ theme }) => theme.colors.primary};
  padding: 1rem;
`;
