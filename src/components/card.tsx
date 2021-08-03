import * as React from 'react';
import { Box, useColorModeValue } from '@chakra-ui/react';

type CardProps = {
  children: React.ReactNode;
};

export const Card: React.FC<CardProps> = ({ children }: CardProps) => (
  <Box
    p={8}
    bg={useColorModeValue('white', 'gray.800')}
    rounded="xl"
    borderWidth="1px"
    borderColor={useColorModeValue('gray.100', 'gray.700')}
    w="100%"
    textAlign="left"
    align="start"
    spacing={4}
  >
    <Box>{children}</Box>
  </Box>
);
