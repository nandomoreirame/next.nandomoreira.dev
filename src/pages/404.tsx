import React from 'react';
import styled from 'styled-components';

import { Hero } from '@nandomoreira/components';

export const Styled404 = styled.div`
  background: url('/travolta.gif') no-repeat 50%;
  background-size: 60%;

  div {
    margin: 0;
  }

  h1 {
    font-size: 16rem;
    font-weight: 800;
    opacity: 0.75;
  }

  p {
    font-size: 2rem;
    font-weight: 300;
    opacity: 0.75;
  }
`;

const NotFoundPage = () => (
  <Styled404>
    <Hero centered>
      <div>
        <h1>404</h1>
        <p>Oops... a página não foi encontrada</p>
      </div>
    </Hero>
  </Styled404>
);

export default NotFoundPage;
