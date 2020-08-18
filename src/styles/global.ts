import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  html {
    font-size: 16px;
    box-sizing: border-box;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: inherit;
  }

  html, body, #__next {
    height: 100%;
  }

  body {
    background-color: ${({ theme }) => theme?.backgroundColor};
    color: ${({ theme }) => theme?.textColor};
    font-family: ${({ theme }) => theme?.fontFamily};
    font-size: ${({ theme }) => theme?.fontSize};
    line-height: ${({ theme }) => theme?.lineHeight};
    font-weight: ${({ theme }) => theme?.fontWeight?.medium};
  }

  h1, h2, h3, h4 {
    font-family: ${({ theme }) => theme?.fontFamilyHeading};
    font-weight: ${({ theme }) => theme?.fontWeight?.bold};
  }
`;
