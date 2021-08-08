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
  React.useEffect(() => {
    // eslint-disable-next-line no-console
    console.log(portfolio);
  }, [portfolio]);

  return (
    <DefaultLayout
      title={`Portfolio: ${portfolio.title}`}
      description={contentToPlainText(portfolio.description)}
    >
      <PageHeader heading={'Portfolio'} title={portfolio.title} />
      <Container maxW="container.lg">
        <Heading>{portfolio?.slug?.current}</Heading>
        <Content content={portfolio.description} />
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
