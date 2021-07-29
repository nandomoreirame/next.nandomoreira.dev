import * as React from 'react';
import { Box, Container, useColorModeValue, Text } from '@chakra-ui/react';

type AvailableBarProps = {
  available: boolean;
};

export const AvailableBar: React.FC<AvailableBarProps> = ({
  available = false,
}: AvailableBarProps) => {
  const availableLightBg = available ? 'green.500' : 'red.500';
  const availableDarkBg = available ? 'green.500' : 'red.500';

  return (
    <Box
      bg={useColorModeValue(availableLightBg, availableDarkBg)}
      position="fixed"
      w="100%"
      zIndex={99}
      bottom={0}
      borderBottomWidth="2px"
      borderBottomColor={useColorModeValue('gray.100', 'gray.700')}
      shadow="0 0 10px 0 rgba(0,0,0, 0.035);"
      textAlign="center"
      py={1}
    >
      <Container maxW="container.lg">
        <Text color={'white'} textTransform="uppercase" fontSize="xs">
          {!available && <>não</>} disponível para novos projetos.
        </Text>
      </Container>
    </Box>
  );
};
