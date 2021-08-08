import * as React from 'react';
import { Box, Container, Heading, Text, useColorModeValue } from '@chakra-ui/react';

type PageHeaderProps = {
  description?: string;
  heading?: string;
  title?: string;
};

export const PageHeader: React.FC<PageHeaderProps> = ({
  heading,
  description,
  title,
}: PageHeaderProps) => {
  return (
    <Box
      as="header"
      pt={20}
      pb={20}
      mb={10}
      backgroundColor={useColorModeValue('gray.100', 'gray.900')}
    >
      <Container maxW="container.lg">
        {heading && (
          <Heading
            as="h1"
            color={useColorModeValue('gray.500', 'gray.400')}
            fontSize={{ base: 'lg', lg: 'xl' }}
            textTransform="uppercase"
            fontFamily="heading"
            letterSpacing="tight"
            mb="3"
          >
            {heading}
          </Heading>
        )}
        {title && (
          <Heading as="p" size="2xl" fontFamily={'heading'} mb={description ? 3 : 0}>
            {title}
          </Heading>
        )}
        {description && (
          <Text fontSize={'xl'} color={'gray.400'}>
            {description}
          </Text>
        )}
      </Container>
    </Box>
  );
};
