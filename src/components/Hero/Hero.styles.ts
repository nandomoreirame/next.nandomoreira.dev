import styled from 'styled-components';
import media from 'styled-media-query';

export const Hero = styled.section`
  align-items: center;
  background-color: ${({ theme }) => theme?.backgroundColor};
  display: flex;
  font-size: 2rem;
  height: 100%;
  justify-content: center;

  ${media.greaterThan('medium')`
    min-height: 100vh;
    width: 100vw;
  `}
`;

export const HeroInner = styled.div`
  align-items: center;
  color: ${({ theme }) => theme?.textColor};
  display: flex;
  max-width: 1000px;
  flex-wrap: wrap;
  text-align: center;
  justify-content: center;
  padding: 0 30px;

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

  h1 {
    font-weight: 600;
    font-size: 16px;
    margin: 30px 0 10px;
    font-weight: 500;
    color: ${({ theme }) => theme?.textColor};
    opacity: 0.8;

    a {
      text-decoration: none;
    }

    ${media.greaterThan('medium')`
      font-size: 18px;
      margin: 0 0 10px;
    `}
  }

  h2 {
    font-weight: 800;
    font-size: 18px;
    line-height: 1.4;
    color: ${({ theme }) => theme?.textColor};

    ${media.greaterThan('small')`
      font-size: 22px;
    `}

    ${media.greaterThan('medium')`
      font-size: 30px;
      line-height: 1.54;
    `}
  }
`;
