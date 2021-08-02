import React from 'react';
import { GetStaticPaths, GetStaticProps, NextPage } from 'next';
import { Container, Heading } from '@chakra-ui/react';
import { DefaultLayout } from '@layouts/default';
import { sanity } from '@services/sanify';
import { PortfolioListQ, PortfolioSingleQ } from '@queries';
import { Content, PageHeader } from '@components';
import { Portfolio } from 'types/portfolio';

type ProjectSinglePageProps = {
  portfolio: Portfolio;
};

const ProjectSinglePage: NextPage<ProjectSinglePageProps> = ({
  portfolio,
}: ProjectSinglePageProps) => {
  const [pageTitle] = React.useState(portfolio.slug.current);
  const [pageDescription] = React.useState(portfolio.title);

  React.useEffect(() => {
    // eslint-disable-next-line no-console
    console.log(portfolio);
  }, [portfolio]);

  return (
    <DefaultLayout title={pageTitle} description={pageDescription}>
      <PageHeader title={pageTitle} description={pageDescription} />
      <Container maxW="container.lg">
        <Heading>{portfolio?.slug?.current}</Heading>
        <Content content={portfolio.description} />
      </Container>
    </DefaultLayout>
  );
};

export async function getStaticPaths(): GetStaticPaths<{ slug: string }> {
  const portfolio = await sanity.fetch(PortfolioListQ);

  const paths = portfolio.map(item => {
    return {
      params: {
        slug: item?.slug?.current,
      },
    };
  });

  // eslint-disable-next-line no-console
  console.log(paths);

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }): GetStaticProps {
  const portfolio = await sanity.fetch(PortfolioSingleQ, { slug: params.slug });

  // eslint-disable-next-line no-console
  console.log(portfolio);

  return {
    props: { portfolio: portfolio[0] },
  };
}

export default ProjectSinglePage;
