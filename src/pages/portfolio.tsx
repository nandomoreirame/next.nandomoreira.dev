import React from 'react';
import { NextPage } from 'next';
import { Container, VStack } from '@chakra-ui/react';
import { DefaultLayout } from '@layouts/default';
import { PageHeader, PortfolioItem } from '@components';
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
        <VStack>
          {portfolio &&
            portfolio.length > 0 &&
            portfolio.map((item: Portfolio, k) => (
              <PortfolioItem key={item._id} portfolio={item} index={k} />
            ))}
        </VStack>
      </Container>
    </DefaultLayout>
  );
};

export async function getStaticProps() {
  const portfolio: Array<Portfolio> = await sanity.fetch(PortfolioListQ);

  // eslint-disable-next-line no-console
  // console.log(portfolio);

  return {
    props: { portfolio },
  };
}

export default PortfolioPage;
