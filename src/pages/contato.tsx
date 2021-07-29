import React from 'react';
import { NextPage } from 'next';
import { Container, Text } from '@chakra-ui/react';
import { DefaultLayout } from '@layouts/default';
import { PageHeader } from '@components';

const ContactPage: NextPage = () => {
  const [pageTitle] = React.useState('Contato');
  const [pageDescription] = React.useState('E aí, vamos conversar?');

  return (
    <DefaultLayout title={pageTitle} description={pageDescription}>
      <PageHeader title={pageTitle} description={pageDescription} />
      <Container maxW="container.lg">
        <Text>
          Você tem um projeto em mente ou está simplesmente interessado em bater um papo, entre em
          contato!
        </Text>
      </Container>
    </DefaultLayout>
  );
};

export default ContactPage;
