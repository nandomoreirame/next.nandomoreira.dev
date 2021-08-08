import * as React from 'react';
import NextLink from 'next/link';
import {
  Box,
  Heading,
  Img as Image,
  Text,
  useColorModeValue,
  Flex,
  Tag,
  TagLeftIcon,
  TagLabel,
} from '@chakra-ui/react';
import { Portfolio } from '@interfaces';
import { contentToPlainText, timesAgoFormatter } from '@util';
import { FaTag } from 'react-icons/fa';

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
        <Flex
          flex={1}
          justify="center"
          align="center"
          position="relative"
          w="full"
          pl={{ md: index % 2 === 0 ? 0 : 6 }}
          pr={{ md: index % 2 === 0 ? 6 : 0 }}
          py={10}
        >
          {portfolio?.imageUrl && (
            <Box
              zIndex="2"
              width={{ base: '100%', md: '90%' }}
              position="relative"
              height={{ base: '100%', md: '90%' }}
            >
              <Image alt={portfolio.title} fit="cover" h="100%" src={portfolio.imageUrl} w="100%" />
            </Box>
          )}
          <Box zIndex="1" width="100%" position="absolute" height="100%">
            <Box
              bgGradient={useColorModeValue(
                'radial(orange.600 1px, transparent 1px)',
                'radial(orange.300 1px, transparent 1px)',
              )}
              backgroundSize="20px 20px"
              opacity="0.4"
              height="100%"
            />
          </Box>
        </Flex>
        <Box
          textAlign={{ md: index % 2 === 0 ? 'left' : 'right' }}
          w={{ base: '100%', md: '45%' }}
          my={{ base: 6, md: 0 }}
        >
          <Heading as="h2" fontSize={{ base: '3xl', md: '4xl' }} mb={4}>
            {portfolio.title}
          </Heading>
          <Text fontSize="md" mb={3} color={useColorModeValue('gray.500', 'gray.200')}>
            {contentToPlainText(portfolio.description)}
          </Text>
          <Box>
            {portfolio?.tags?.map(tag => (
              <Tag
                key={tag.slug.current}
                as="strong"
                ml={{ md: index % 2 === 0 ? 0 : 2 }}
                mr={{ base: 2, md: index % 2 === 0 ? 2 : 0 }}
                mb={3}
                size="sm"
              >
                <TagLeftIcon boxSize="12px" as={FaTag} />
                <TagLabel>{tag.title}</TagLabel>
              </Tag>
            ))}
          </Box>
          <Text fontSize="xs" color="gray.400" mt={3}>
            Publicado: {timesAgoFormatter(portfolio?.publishedAt)}
          </Text>
        </Box>
      </Box>
    </Box>
  </NextLink>
);
