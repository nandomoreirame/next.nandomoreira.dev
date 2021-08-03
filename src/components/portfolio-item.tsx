import * as React from 'react';
import NextLink from 'next/link';
import { Box, Heading, Img as Image, Text, useColorModeValue } from '@chakra-ui/react';
import { Portfolio } from '@interfaces';
import { contentToPlainText, timesAgoFormatter } from '@util';

type PortfolioItemProps = {
  portfolio: Portfolio;
  index?: number;
};

export const PortfolioItem: React.FC<PortfolioItemProps> = ({
  portfolio,
  index = 0,
}: PortfolioItemProps) => (
  <NextLink href={`/portfolio/${portfolio.slug.current}`} passHref>
    <Box as="a">
      <Box
        p={4}
        my={{ base: 4, md: 8 }}
        cursor="pointer"
        display={{ md: 'flex' }}
        bg={useColorModeValue('white', 'gray.800')}
        rounded="xl"
        borderWidth="1px"
        borderColor={useColorModeValue('gray.100', 'gray.700')}
        w="100%"
        flexDirection={{ md: index % 2 === 0 ? 'row' : 'row-reverse' }}
        alignItems="center"
        transition="all 0.25s"
        transition-timing-function="spring(1 100 10 10)"
        _hover={{ transform: 'translateY(-4px)', shadow: 'sm' }}
      >
        <Box rounded="md" w={{ base: '100%', md: '55%' }} overflow="hidden" shadow="lg">
          {portfolio?.imageUrl && (
            <Image src={portfolio.imageUrl} layout="responsive" alt={portfolio.title} />
          )}
        </Box>
        <Box
          textAlign={{ md: index % 2 === 0 ? 'left' : 'right' }}
          w={{ base: '100%', md: '45%' }}
          pl={{ md: index % 2 === 0 ? 3 : 0 }}
          pr={{ md: index % 2 === 0 ? 0 : 6 }}
          my={{ base: 6, md: 0 }}
        >
          <Heading as="h2" fontWeight="bold" fontSize="lg" mb={3}>
            {portfolio.title}
          </Heading>
          <Text fontSize="md" color={useColorModeValue('gray.500', 'gray.200')}>
            {contentToPlainText(portfolio.description)}
          </Text>
          <Text fontSize="xs" color="gray.400" mt={3}>
            Publicado: {timesAgoFormatter(portfolio?.publishedAt)}
          </Text>
        </Box>
      </Box>
    </Box>
  </NextLink>
);
