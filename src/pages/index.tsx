import React, { Fragment } from 'react';
import { Hero, DarkMode, Avatar, Social } from '@nandomoreira/components';

const HomePage = () => {
  return (
    <Fragment>
      <Hero>
        <Avatar src={require(`@nandomoreira/images/avatar.png`)} />
        <div>
          <h1>Olá, eu sou o Fernando</h1>
          <h2>
            Ajudo empresas a criar projetos web personalizados, de alta qualidade e com tecnologias
            criativas.
          </h2>
          <Social />
        </div>
      </Hero>
      <DarkMode />
    </Fragment>
  );
};

export default HomePage;
