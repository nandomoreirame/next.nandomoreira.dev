import styled from 'styled-components';
import media from 'styled-media-query';

export const Header = styled.header`
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  z-index: 1000;

  ${media.greaterThan('medium')`
    position: fixed;
  `}
`;

export const HeaderInner = styled.div`
  align-items: center;
  display: flex;
  justify-content: space-between;
  padding: 2.5rem;
`;

export const Logo = styled.h1`
  display: flex;
`;

export const Nav = styled.nav`
  display: flex;
`;

export const NavLink = styled.a`
  color: ${({ theme }) => theme?.textColor};
  cursor: pointer;
  display: inline-block;
  font-family: ${({ theme }) => theme?.fontFamilyHeading};
  font-size: 1rem;
  font-weight: ${({ theme }) => theme?.fontWeight?.medium};
  margin: 0 10px;
  padding: 5px 10px;
  position: relative;
  text-decoration: none;

  &::before,
  &::after {
    content: '';
    display: block;
    position: absolute;
    bottom: 0;
    height: 2px;
    width: 0%;
    background-color: ${({ theme }) => theme?.textColor};
    opacity: 0.5;
    transition: all 0.2s ease-in-out;
  }

  &::before {
    left: 10px;
  }

  &::after {
    right: 10px;
  }

  &.--active,
  &:active,
  &:hover {
    &::before,
    &::after {
      width: calc(50% - 10px);
    }
  }
`;
