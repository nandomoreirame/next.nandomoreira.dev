import * as React from 'react';
import { Box, Heading, useColorModeValue } from '@chakra-ui/react';

type AboutCardProps = {
  children: React.ReactNode;
  title: string;
  border?: boolean;
};

export const AboutCard: React.FC<AboutCardProps> = ({
  children,
  title,
  border = false,
}: AboutCardProps) => (
  <Box
    pb={4}
    mb={8}
    borderBottomWidth={border ? '1px' : '0'}
    borderBottomColor={useColorModeValue('gray.200', 'gray.700')}
  >
    <Heading as="h3" fontSize={{ base: '2xl', md: '4xl' }} mb={{ base: 4, md: 6 }}>
      {title}
    </Heading>
    {children}
  </Box>
);
