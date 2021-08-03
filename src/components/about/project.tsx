import * as React from 'react';
import { Text } from '@chakra-ui/react';
import { AboutCard } from './about-card';

export const Project: React.FC = () => (
  <AboutCard title="Sobre esse site" border>
    <Text mb={4}>
      Esse projeto já foi reescrito várias vezes (como foi citado no blog do{' '}
      <a
        href="https://willianjusten.com.br/como-se-manter-atualizado-no-frontend/#em-portugu%C3%AAs"
        rel="nofollow noopener noreferrer"
        target="_blank"
      >
        Willian Justem
      </a>{' '}
      , eu sou o cara que mais muda de layout para blog na face da Terra!), eu o uso para fazer meus
      experimentos malucos, geralmente quando estou a estudar uma tecnologia nova.
    </Text>
    <Text mb={4}>
      {' '}
      Nele eu já utilizei o{' '}
      <strong>
        <a href="https://br.wordpress.org/" rel="nofollow noopener noreferrer" target="_blank">
          WordPress
        </a>
      </strong>{' '}
      (em PHP),{' '}
      <strong>
        <a href="https://jekyllrb.com/" rel="nofollow noopener noreferrer" target="_blank">
          Jekyll
        </a>
      </strong>{' '}
      (em Ruby),{' '}
      <strong>
        <a href="https://middlemanapp.com/" rel="nofollow noopener noreferrer" target="_blank">
          Middleman
        </a>
      </strong>{' '}
      (em Ruby),{' '}
      <a href="https://nuxtjs.org/" rel="nofollow noopener noreferrer" target="_blank">
        Nuxt.js
      </a>{' '}
      (com{' '}
      <a href="https://vuejs.org/" rel="nofollow noopener noreferrer" target="_blank">
        Vue.js
      </a>{' '}
      ), e atualmente está escrito em{' '}
      <strong>
        <a href="https://reactjs.org/" rel="nofollow noopener noreferrer" target="_blank">
          React.js
        </a>
      </strong>{' '}
      utilizando{' '}
      <strong>
        <a href="https://www.gatsbyjs.org/" rel="nofollow noopener noreferrer" target="_blank">
          Gatsby
        </a>
      </strong>{' '}
      para gerar os arquivos estáticos e hospeda-los no{' '}
      <a href="https://www.netlify.com/" rel="nofollow noopener noreferrer" target="_blank">
        netlify.com
      </a>
      .
    </Text>
    <Text mb={4}>
      O código é totalmente Open Source sob licença{' '}
      <a href="https://github.com/nandomoreirame/nandomoreira.dev/blob/master/LICENSE">MIT</a> e
      você pode <em>"forcar"</em> ele{' '}
      <a href="https://github.com/nandomoreirame/nandomoreira.dev">aqui</a> , fique à vontade para
      contribuir também :).
    </Text>
  </AboutCard>
);
