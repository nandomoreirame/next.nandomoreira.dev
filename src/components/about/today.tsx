import { Text } from '@chakra-ui/react';
import * as React from 'react';
import { AboutCard } from './about-card';

export const Today: React.FC = () => (
  <AboutCard title="E o que faço hoje?" border>
    <Text mb={4}>
      Hoje sou especializado em desenvolvimento web usando{' '}
      <strong>
        <em>
          <a href="https://br.wordpress.org/" rel="nofollow noopener noreferrer" target="_blank">
            WordPress
          </a>
        </em>
      </strong>{' '}
      com foco em{' '}
      <strong>
        <em>
          <a
            href="https://pt.wikipedia.org/wiki/Front-end_e_back-end"
            rel="nofollow noopener noreferrer"
            target="_blank"
          >
            front-end
          </a>
        </em>
      </strong>{' '}
      eu sempre cuido da usabilidade e performance de um site.
    </Text>
    <Text mb={4}>
      Atualmente trabalho como desenvolvedor{' '}
      <strong>
        <em>Front-end</em>
      </strong>{' '}
      utilizando tecnologias sempre atualizadas como, HTML5/5.1, CSS3/4, SASS, ECMAScript 6/7/8,
      GulpJS e VueJS, nos tempos livres escrevo no meu Blog e contribuo com alguns códigos no{' '}
      <a href="https://github.com/nandomoreirame" rel="noopener noreferrer" target="_blank">
        Github
      </a>
      .
    </Text>
  </AboutCard>
);
