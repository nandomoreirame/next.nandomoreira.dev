import React from 'react';
import { GetStaticPaths, NextPage } from 'next';
import { Container, Heading } from '@chakra-ui/react';
import { DefaultLayout } from '@layouts/default';
import { sanity } from '@services/sanify';
import groq from 'groq';
import { PageHeader } from '@components';

const ProjectPage: NextPage = () => {
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

export const getStaticPaths: GetStaticPaths<{ slug: string }> = async () => {
  return {
    paths: [], //indicates that no page needs be created at build time
    fallback: 'blocking', //indicates the type of fallback
  };
};

export async function getStaticProps({ params }): GetStaticProps {
  const queryPortfolio = groq`*[slug.current == ${params.slug}] | order(_createdAt asc) {
    _id,
    _type,
    _createdAt,
    title,
    slug,
    tags,
    description,
    image,
    publishedAt,
    link,
  }`;
  const portfolio = await sanity.fetch(queryPortfolio);

  // eslint-disable-next-line no-console
  console.log(portfolio);

  return {
    props: {
      portfolio,
    },
  };
}

export default ProjectPage;
