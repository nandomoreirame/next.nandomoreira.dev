import React from 'react';
import { NextPage } from 'next';
import { DefaultLayout } from '@layouts/default';
import { Container, Heading, Box } from '@chakra-ui/react';
import { PageHeader } from '@components';
import { whatsappLink } from '@util';

const AboutPage: NextPage = () => {
  const [age, setAge] = React.useState(32);
  const [pageTitle] = React.useState('Sobre mim');
  // const [pageDescription] = React.useState('Um programador não por formação mas por vocação');
  const [pageDescription] = React.useState('Nem Funkeiro, nem RoskStar... Programador.');

  React.useEffect(() => {
    setAge(new Date().getFullYear() - 1989);
  }, []);

  return (
    <DefaultLayout title={pageTitle} description={pageDescription}>
      <PageHeader title={pageTitle} description={pageDescription} />

      <Container maxW="container.lg">
        <Box>
          <Heading>Eu sou o Fernando, prazer em conhece-lo</Heading>
          <p>
            Meu nome completo é <strong>Fernando Moreira Costa</strong>, tenho <span>{age}</span>{' '}
            anos, nasci e cresci em uma cidadezinha do interior de <strong>Rondônia</strong> chamada{' '}
            <strong>Ariquemes</strong> , sai de lá com 18 anos para me aventurar em{' '}
            <strong>Curitiba/PR</strong> onde moro atualmente.
          </p>
          <p>
            <span role="img" aria-label="emoji de um notebook">
              💻
            </span>{' '}
            Sou programador não por formação mas por vocação,{' '}
            <span role="img" aria-label="emoji de um abacate">
              🥑
            </span>{' '}
            vegetariano,
            <span role="img" aria-label="emoji de um violino">
              🎻
            </span>{' '}
            violinista,
            <span role="img" aria-label="emoji de uma carinha pensando">
              🤔
            </span>{' '}
            piadista{' '}
            <span role="img" aria-label="emoji de um coração">
              ❤️
            </span>
            e fã de beterraba.
          </p>
        </Box>

        <Box>
          <Heading>Histórico profissional</Heading>
          <p>
            Eu comecei a <em>"brincar"</em> com códigos em meados de 2009 e trabalhar
            profissionalmente em uma agência de criação e desenvolvimento web no ano de 2011.
          </p>
          <p>
            Em 2010 comecei o curso de web design na Microcamp <strong>Curitiba</strong> e finalizei
            em 2012, nesta mesma época conclui o curso técnico em informática com ênfase em
            programação no{' '}
            <a
              href="http://www.cep.pr.gov.br/pagina-59.html"
              rel="nofollow noopener noreferrer"
              target="_blank"
            >
              Colégio Estadual do Paraná (CEP)
            </a>
            .
          </p>
          <p>
            Desde então venho trabalhando com desenvolvimento web, <em>design</em> ,{' '}
            <em>Front-end</em> e <em>UX Design</em>.
          </p>
          <p>
            Já passei por algumas tantas empresas, dentre elas{' '}
            <span>
              <a
                href="http://www.malapronta.com.br/"
                rel="nofollow noopener noreferrer"
                target="_blank"
              >
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
              <a
                href="https://www.lojaskd.com.br/"
                rel="nofollow noopener noreferrer"
                target="_blank"
              >
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
          </p>
        </Box>
        <Box>
          <Heading>E o que faço hoje?</Heading>
          <p>
            Hoje sou especializado em desenvolvimento web usando{' '}
            <strong>
              <em>
                <a
                  href="https://br.wordpress.org/"
                  rel="nofollow noopener noreferrer"
                  target="_blank"
                >
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
          </p>
          <p>
            Atualmente trabalho como desenvolvedor{' '}
            <strong>
              <em>Front-end</em>
            </strong>{' '}
            utilizando tecnologias sempre atualizadas como, HTML5/5.1, CSS3/4, SASS, ECMAScript
            6/7/8, GulpJS e VueJS, nos tempos livres escrevo no meu Blog e contribuo com alguns
            códigos no{' '}
            <a href="https://github.com/nandomoreirame" rel="noopener noreferrer" target="_blank">
              Github
            </a>
            .
          </p>
        </Box>

        <Box>
          <h2>Sobre esse site</h2>
          <p>
            Esse projeto já foi reescrito várias vezes (como foi citado no blog do{' '}
            <a
              href="https://willianjusten.com.br/como-se-manter-atualizado-no-frontend/#em-portugu%C3%AAs"
              rel="nofollow noopener noreferrer"
              target="_blank"
            >
              Willian Justem
            </a>{' '}
            , eu sou o cara que mais muda de layout para blog na face da Terra!), eu o uso para
            fazer meus experimentos malucos, geralmente quando estou a estudar uma tecnologia nova.
          </p>
          <p>
            {' '}
            Nele eu já utilizei o{' '}
            <strong>
              <a
                href="https://br.wordpress.org/"
                rel="nofollow noopener noreferrer"
                target="_blank"
              >
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
              <a
                href="https://middlemanapp.com/"
                rel="nofollow noopener noreferrer"
                target="_blank"
              >
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
              <a
                href="https://www.gatsbyjs.org/"
                rel="nofollow noopener noreferrer"
                target="_blank"
              >
                Gatsby
              </a>
            </strong>{' '}
            para gerar os arquivos estáticos e hospeda-los no{' '}
            <a href="https://www.netlify.com/" rel="nofollow noopener noreferrer" target="_blank">
              netlify.com
            </a>
            .
          </p>
          <p>
            O código é totalmente Open Source sob licença{' '}
            <a href="https://github.com/nandomoreirame/nandomoreira.dev/blob/master/LICENSE">MIT</a>{' '}
            e você pode <em>"forcar"</em> ele{' '}
            <a href="https://github.com/nandomoreirame/nandomoreira.dev">aqui</a> , fique à vontade
            para contribuir também :).
          </p>
        </Box>

        <Box>
          <h2>Quer mais?</h2>
          <p>
            Se você quiser atualizações aleatórias e regulares sobre o que eu ando fazendo da vida,
            você pode...
          </p>
          <ul>
            <li>
              ... me seguir no Twitter em{' '}
              <a href="https://twitter.com/oseunando" rel="noopener noreferrer" target="_blank">
                @oseunando
              </a>
            </li>
            <li>
              Ou seguir no Instagram em{' '}
              <a href="https://instagram.com/oseunando" rel="noopener noreferrer" target="_blank">
                @oseunando
              </a>
              .
            </li>
          </ul>
          <p>Mas... Se peferir um contato mais direto pode me chamar no...</p>
          <ul>
            <li>
              ...{' '}
              <a href="https://t.me/oseunando" target="_blank" rel="noopener noreferrer">
                Telegram
              </a>{' '}
              ou no{' '}
              <a href={whatsappLink()} target="_blank" rel="noopener noreferrer">
                WhatsApp
              </a>
              .
            </li>
            <li>
              Ou se preferir pode enviar um email para{' '}
              <a href="mailto:hi@nandomoreira.dev" target="_blank" rel="noopener noreferrer">
                hi@nandomoreira.dev
              </a>{' '}
              que é sucesso!
            </li>
          </ul>
        </Box>
      </Container>
    </DefaultLayout>
  );
};

export default AboutPage;
