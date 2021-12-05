import { normalize } from 'polished';
import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  ${normalize()}
  html {
    font-family: Pretendard, -apple-system, BlinkMacSystemFont, system-ui, Roboto, 'Helvetica Neue', 'Segoe UI', 'Apple SD Gothic Neo', 'Noto Sans KR', 'Malgun Gothic', sans-serif;
    color: ${({ theme }) => theme.colors.text};
    background: ${({ theme }) => theme.colors.background};
    ${({ theme }) => theme.typography.body}
  }

  h1 {
    ${({ theme }) => theme.typography.h1}
  }

  h2 {
    ${({ theme }) => theme.typography.h2}
  }

  h3 {
    ${({ theme }) => theme.typography.h3}
  }

  h4 {
    ${({ theme }) => theme.typography.h4}
  }

  p {
    ${({ theme }) => theme.typography.body}
  }

  button {
    ${({ theme }) => theme.typography.button}
  }
`;
