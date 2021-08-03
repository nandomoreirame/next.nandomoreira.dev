import * as React from 'react';
import { Box, Container, Stack, Heading, useColorModeValue, Text } from '@chakra-ui/react';
import NextLink from 'next/link';
import { Social, Avatar } from '@components';

export const Hero: React.FC<{}> = () => {
  return (
    <Stack
      as={Box}
      minH="100vh"
      w={{ md: '100vw' }}
      display={{ md: 'flex' }}
      pt={{ base: 28, md: 0 }}
      pb={{ base: 28, md: 0 }}
      alignItems={{ md: 'center' }}
      justifyContent={{ md: 'center' }}
      bg={useColorModeValue('gray.100', 'gray.900')}
    >
      <Container
        alignItems={{ md: 'center' }}
        display={{ base: 'block', md: 'flex' }}
        maxW="container.lg"
        textAlign={{ base: 'center', md: 'left' }}
        itemScope
        itemType="http://schema.org/Person"
      >
        <Box pr={{ base: 0, md: 4 }} mb={{ base: 10, md: 0 }} maxW={{ base: '100%', md: '240px' }}>
          <Avatar />
        </Box>
        <Box pl={4}>
          <Heading
            as="h1"
            color={useColorModeValue('gray.500', 'gray.400')}
            fontSize={{ base: 'lg', lg: 'xl' }}
            textTransform="uppercase"
            fontFamily="heading"
            letterSpacing="tight"
            mb="3"
          >
            Olá, eu sou o{' '}
            <Text
              as="strong"
              itemProp="name"
              position="relative"
              transition="all .12s ease-in-out"
              _hover={{
                color: useColorModeValue('gray.400', 'gray.300'),
              }}
              _after={{
                content: '""',
                backgroundColor: useColorModeValue('gray.500', 'gray.400'),
                width: '100%',
                height: '2px',
                display: 'block',
                position: 'absolute',
                left: 0,
              }}
            >
              <NextLink href="/sobre" passHref>
                <a itemProp="url">Fernando Moreira</a>
              </NextLink>
              <meta itemProp="jobTitle" content="desenvolvedor front-end" />
              <meta itemProp="worksFor" content="Onedev.studio" />
            </Text>
          </Heading>
          <Heading
            as="p"
            size="2xl"
            fontSize={{ base: '1.2rem', sm: '1.6rem', lg: '2rem' }}
            fontFamily="heading"
            letterSpacing="tight"
            fontWeight="extrabold"
            lineHeight="1.4"
            role="presentation"
            itemProp="description"
          >
            Ajudo empresas a criar projetos web personalizados, de alta qualidade e com{' '}
            <Text as="span" color={useColorModeValue('teal.800', 'teal.300')}>
              tecnologias criativas.
            </Text>
          </Heading>
          <Social border />
        </Box>
      </Container>
    </Stack>
  );
};
