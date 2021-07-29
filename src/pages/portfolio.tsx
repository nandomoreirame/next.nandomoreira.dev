import React from 'react';
import { NextPage } from 'next';
import { Container, Heading } from '@chakra-ui/react';
import { DefaultLayout } from '@layouts/default';
import { PageHeader } from '@components';

const PortfolioPage: NextPage = () => {
  const [pageTitle] = React.useState('Portfolio');
  const [pageDescription] = React.useState(
    'Abaixo estão listados alguns dos meus melhores trabalhos',
  );

  return (
    <DefaultLayout title={pageTitle} description={pageDescription}>
      <PageHeader title={pageTitle} description={pageDescription} />
      <Container maxW="container.lg">
        <Heading>Portfolio Page</Heading>
      </Container>
    </DefaultLayout>
  );
};

export default PortfolioPage;
