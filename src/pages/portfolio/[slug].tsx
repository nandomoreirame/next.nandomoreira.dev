import React from 'react';
import { GetStaticPropsContext, NextPage } from 'next';
import { Container, Heading } from '@chakra-ui/react';
import { DefaultLayout } from '@layouts/default';
import { sanity } from '@services/sanify';
import { PortfolioListQ, PortfolioSingleQ } from '@queries';
import { Content, PageHeader } from '@components';
import { Portfolio } from '@interfaces';
import { contentToPlainText } from '@util';

type ProjectSinglePageProps = {
  portfolio: Portfolio;
};

const ProjectSinglePage: NextPage<ProjectSinglePageProps> = ({
  portfolio,
}: ProjectSinglePageProps) => {
  const pageTitle = portfolio.title;
  const pageDescription = portfolio.description || contentToPlainText(portfolio?.content);

  React.useEffect(() => {
    // eslint-disable-next-line no-console
    console.log(portfolio);
  }, [portfolio]);

  return (
    <DefaultLayout title={`Portfolio: ${pageTitle}`} description={pageDescription}>
      <PageHeader heading={'Portfolio'} title={pageTitle} description={pageDescription} />
      <Container maxW="container.lg">
        {portfolio?.content && <Content content={portfolio?.content} />}
      </Container>
    </DefaultLayout>
  );
};

export async function getStaticPaths() {
  const portfolio: Array<Portfolio> = await sanity.fetch(PortfolioListQ);

  const paths = portfolio.map(item => {
    return {
      params: {
        slug: item?.slug?.current,
      },
    };
  });

  // eslint-disable-next-line no-console
  // console.log(paths);

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }: GetStaticPropsContext) {
  const slug = (params?.slug as string) || '';
  const portfolio: Array<Portfolio> = await sanity.fetch(PortfolioSingleQ, { slug });

  // eslint-disable-next-line no-console
  console.log(portfolio);

  return {
    props: { portfolio: portfolio },
  };
}

export default ProjectSinglePage;
