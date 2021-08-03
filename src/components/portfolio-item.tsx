import * as React from 'react';
import NextLink from 'next/link';
import { Box, Heading, HStack, Img as Image, Text, useColorModeValue } from '@chakra-ui/react';
import { Portfolio } from 'types/portfolio';
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
      <HStack
        p={4}
        my={10}
        cursor="pointer"
        bg={useColorModeValue('white', 'gray.800')}
        rounded="xl"
        borderWidth="1px"
        borderColor={useColorModeValue('gray.100', 'gray.700')}
        w="100%"
        minHeight={{ base: 'auto', md: '260px' }}
        flexDirection={index % 2 === 0 ? 'row' : 'row-reverse'}
        align="center"
        spacing={4}
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
          textAlign={index % 2 === 0 ? 'left' : 'right'}
          w={{ base: '100%', md: '45%' }}
          pl={index % 2 === 0 ? 3 : 0}
          pr={index % 2 === 0 ? 0 : 6}
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
      </HStack>
    </Box>
  </NextLink>
);
