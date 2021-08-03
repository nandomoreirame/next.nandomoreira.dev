import * as React from 'react';
import { Text } from '@chakra-ui/react';
import { AboutCard } from './about-card';

export const History: React.FC = () => (
  <AboutCard title="Histórico profissional" border>
    <Text mb={4}>
      Eu comecei a <em>"brincar"</em> com códigos em meados de 2009 e trabalhar profissionalmente em
      uma agência de criação e desenvolvimento web no ano de 2011.
    </Text>
    <Text mb={4}>
      Em 2010 comecei o curso de web design na Microcamp <strong>Curitiba</strong> e finalizei em
      2012, nesta mesma época conclui o curso técnico em informática com ênfase em programação no{' '}
      <a
        href="http://www.cep.pr.gov.br/pagina-59.html"
        rel="nofollow noopener noreferrer"
        target="_blank"
      >
        Colégio Estadual do Paraná (CEP)
      </a>
      .
    </Text>
    <Text mb={4}>
      Desde então venho trabalhando com desenvolvimento web, <em>design</em> , <em>Front-end</em> e{' '}
      <em>UX Design</em>.
    </Text>
    <Text mb={4}>
      Já passei por algumas tantas empresas, dentre elas{' '}
      <span>
        <a href="http://www.malapronta.com.br/" rel="nofollow noopener noreferrer" target="_blank">
          MalaPronta
        </a>
      </span>{' '}
      ,{' '}
      <strong>
        <a href="https://www.pipefy.com/" rel="nofollow noopener noreferrer" target="_blank">
          Pipefy
        </a>
      </strong>{' '}
      e{' '}
      <span>
        <a href="https://www.lojaskd.com.br/" rel="nofollow noopener noreferrer" target="_blank">
          LojasKD
        </a>
      </span>{' '}
      se destacam por ter trabalhado em um único produto, onde acumulei skylls de{' '}
      <strong>
        <em>Front-end</em>
      </strong>{' '}
      e{' '}
      <strong>
        <em>UX Design</em>
      </strong>
      .
    </Text>
  </AboutCard>
);
