import styled from 'styled-components';

export const Logo = styled.a`
  cursor: pointer;
  display: inline-block;
`;

export const Svg = styled.svg`
  path {
    fill: ${({ theme }) => theme?.logo?.pathColor};
  }

  rect {
    fill: ${({ theme }) => theme?.logo?.rectColor};
  }
`;
