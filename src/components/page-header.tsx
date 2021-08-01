import * as React from 'react';
import { Box, Container, Heading, useColorModeValue } from '@chakra-ui/react';

type PageHeaderProps = {
  title: string;
  description: string;
};

export const PageHeader: React.FC<PageHeaderProps> = ({ title, description }: PageHeaderProps) => {
  return (
    <Box
      as="header"
      pt={20}
      pb={20}
      mb={10}
      backgroundColor={useColorModeValue('gray.100', 'gray.900')}
    >
      <Container maxW="container.lg">
        <Heading
          as="h1"
          color={useColorModeValue('gray.500', 'gray.400')}
          fontSize={{ base: 'lg', lg: 'xl' }}
          textTransform="uppercase"
          fontFamily="heading"
          letterSpacing="tight"
          mb="3"
        >
          {title}
        </Heading>
        <Heading as="p" size="2xl" fontFamily={'heading'}>
          {description}
        </Heading>
      </Container>
    </Box>
  );
};
