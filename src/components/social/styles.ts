import styled from '@emotion/styled';

type SocialNavProps = {
  light?: boolean;
};

export const SocialNav = styled.nav<SocialNavProps>`
  align-items: center;
  display: flex;
  margin-top: 20px;
  justify-content: flex-start;

  &::before,
  &::after {
    background-color: ${({ light }) => (light ? '#272643' : '#f6fafd')};
    opacity: 0.5;
    content: '';
    width: 100px;
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
    display: none;
  }
`;

export const SocialLink = styled.a`
  display: inline-block;
  padding: 0 5px;
  transition: all 0.12s ease-in-out;
  margin-left: 10px;

  &:hover,
  &:focus,
  &:active {
    opacity: 0.75;
    transform: translate3d(0, -2px, 0);
  }
`;
