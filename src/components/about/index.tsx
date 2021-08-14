import * as React from 'react';
import { Container, Box, Img as Image } from '@chakra-ui/react';
import { Card, Social } from '@components';
import avatar from '@images/avatar.png';
import { Me } from './me';
import { History } from './history';
import { Today } from './today';
import { Project } from './project';
import { More } from './more';

export const About: React.FC = () => {
  return (
    <Container maxW="container.lg">
      <Box display={{ base: 'block', md: 'flex' }} mb={6}>
        <Box mr={{ base: 0, md: 10 }} mb={{ base: 10, md: 0 }} w={{ base: '100%', md: '40%' }}>
          <Image
            src={avatar?.src}
            alt={`Foto de Fernando Moreira`}
            rounded="xl"
            borderWidth="1px"
            w="100%"
          />
          <Social />
        </Box>

        <Box mr={{ base: 0, md: 10 }} mb={{ base: 10, md: 0 }} w={{ base: '100%', md: '60%' }}>
          <Me />
        </Box>
      </Box>

      <Card>
        <History />
        <Today />
        <Project />
        <More />
      </Card>
    </Container>
  );
};
