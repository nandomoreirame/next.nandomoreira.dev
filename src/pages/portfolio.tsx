import React from 'react';
import { GetStaticProps, NextPage } from 'next';
import NextLink from 'next/link';
import { Container, Text } from '@chakra-ui/react';
import { DefaultLayout } from '@layouts/default';
import { PageHeader } from '@components';
import { PortfolioListQ } from '@queries';
import { sanity } from '@services/sanify';
import { Portfolio } from 'types/portfolio';

type PortfolioPageProps = {
  portfolio: Array<Portfolio>;
};

const PortfolioPage: NextPage<PortfolioPageProps> = ({ portfolio }: PortfolioPageProps) => {
  const [pageTitle] = React.useState('Portfolio');
  const [pageDescription] = React.useState(
    'Abaixo estão listados alguns dos meus melhores trabalhos',
  );

  return (
    <DefaultLayout title={pageTitle} description={pageDescription}>
      <PageHeader title={pageTitle} description={pageDescription} />
      <Container maxW="container.lg">
        {portfolio &&
          portfolio.length > 0 &&
          portfolio.map((item: Portfolio) => (
            <Text key={item._id} id={item._id}>
              <NextLink href={`/portfolio/${item.slug.current}`} passHref>
                <a itemProp="url">{item.title}</a>
              </NextLink>
            </Text>
          ))}
      </Container>
    </DefaultLayout>
  );
};

export async function getStaticProps(): GetStaticProps {
  const portfolio: Array<Portfolio> = await sanity.fetch(PortfolioListQ);

  // eslint-disable-next-line no-console
  console.log(portfolio);

  return {
    props: { portfolio },
  };
}

export default PortfolioPage;
