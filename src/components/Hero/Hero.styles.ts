import styled from 'styled-components';
import media from 'styled-media-query';

export const Hero = styled.section`
  align-items: center;
  display: flex;
  font-size: 2rem;
  height: 100%;
  justify-content: center;
  padding: 200px 0;

  ${media.greaterThan('medium')`
    min-height: 100vh;
    width: 100vw;
  `}
`;

export const HeroInner = styled.div`
  align-items: center;
  color: ${({ theme }) => theme?.textColor};
  display: flex;
  max-width: 60rem;
  flex-wrap: wrap;
  text-align: center;
  justify-content: center;
  padding: 0 1.875rem;

  ${media.greaterThan('medium')`
    flex-wrap: nowrap;
    text-align: left;
    justify-content: flex-start;
  `}

  > div {
    ${media.greaterThan('medium')`
      margin-left: 60px;
    `}
  }

  &.--centered {
    > div {
      text-align: center;
      margin: 0;
    }
  }

  h1 {
    font-weight: 600;
    font-size: 1rem;
    margin: 1.875rem 0 0.625rem;
    font-weight: 500;
    color: ${({ theme }) => theme?.textColor};
    opacity: 0.8;

    a {
      text-decoration: none;
    }

    ${media.greaterThan('medium')`
      font-size: 1.125rem;
      margin: 0 0 0.625rem;
    `}
  }

  h2 {
    font-size: 1.125rem;
    line-height: ${({ theme }) => theme?.lineHeight};
    color: ${({ theme }) => theme?.textColor};

    ${media.greaterThan('small')`
      font-size: 1.375rem;
    `}

    ${media.greaterThan('medium')`
      font-size: 1.875rem;
      line-height: 1.54;
    `}
  }
`;
