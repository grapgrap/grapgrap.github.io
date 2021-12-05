import { Link } from 'gatsby';
import { ReactElement } from 'react';
import styled from 'styled-components';

export function Header(): ReactElement {
  return (
    <Container>
      <Link to="/">grapgrap --dev</Link>
      <Navbar>
        <Link to="/posts">Posts</Link>
      </Navbar>
    </Container>
  );
}

const Navbar = styled.nav``;

const Container = styled.header`
  display: flex;
  flex-direction: row;
  background-color: ${({ theme }) => theme.colors.primary};
  padding: 1rem;
`;
