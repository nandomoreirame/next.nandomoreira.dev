import styled from 'styled-components';
import media from 'styled-media-query';

export const SocialNav = styled.nav`
  align-items: center;
  display: flex;
  margin-top: 20px;
  justify-content: center;

  ${media.greaterThan('medium')`
    justify-content: flex-start;
  `}

  &::before,
  &::after {
    width: 40px;
    background-color: ${({ theme }) => theme?.borderColor};
    opacity: 0.5;
    content: '';

    ${media.greaterThan('medium')`
      width: 100px;
    `}
  }

  &::before {
    margin-right: 10px;
    display: inline-block;
    height: 1px;
  }

  &::after {
    margin-left: 15px;
    display: inline-block;
    height: 1px;

    ${media.greaterThan('medium')`
      display: none;
    `}
  }
`;

export const SocialLink = styled.a`
  display: inline-block;
  margin-left: 5px;
  padding: 0 5px;
  transition: all 0.12s ease-in-out;

  ${media.greaterThan('medium')`
    margin-left: 10px;
  `}

  &:hover,
  &:focus,
  &:active {
    opacity: 0.75;
    transform: translate3d(0, -2px, 0);
  }
`;
