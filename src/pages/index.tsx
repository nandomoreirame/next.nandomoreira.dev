import * as React from 'react';
import { NextPage } from 'next';
import { Hero } from '@components';
import { DefaultLayout } from '@layouts/default';

const HomePage: NextPage = () => (
  <DefaultLayout
    title="Olá, eu sou o"
    description="Ajudo empresas a criar projetos web personalizados, de alta qualidade e com tecnologias criativas."
    noSpace
  >
    <Hero />
  </DefaultLayout>
);

export default HomePage;
