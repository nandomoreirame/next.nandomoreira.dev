import React from 'react';
import { NextPage } from 'next';
import { DefaultLayout } from '@layouts/default';
import { About, PageHeader } from '@components';

const AboutPage: NextPage = () => {
  const [pageTitle] = React.useState('Sobre mim');
  // const [pageDescription] = React.useState('Um programador não por formação mas por vocação');
  const [pageDescription] = React.useState('Nem Funkeiro, nem RoskStar... Programador.');

  return (
    <DefaultLayout title={pageTitle} description={pageDescription}>
      <PageHeader heading={pageTitle} title={pageDescription} />
      <About />
    </DefaultLayout>
  );
};

export default AboutPage;
