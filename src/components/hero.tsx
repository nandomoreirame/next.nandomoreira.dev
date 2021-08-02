import * as React from 'react';
import {
  Box,
  Container,
  Stack,
  Heading,
  useColorModeValue,
  Text,
  AvatarBadge,
  Tooltip,
  Avatar,
} from '@chakra-ui/react';
import avatar from '@images/avatar.png';
import NextLink from 'next/link';
import { Social } from '@components';

export const Hero: React.FC<{}> = () => {
  const [available, setAvailable] = React.useState(false);

  React.useEffect(() => {
    setAvailable(false);
  }, []);

  const availableBg = available ? 'green.500' : 'red.500';
  const availableText = available
    ? 'Disponível para novos projetos'
    : 'Não disponível para novos projetos';

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
        <Box pr={{ base: 0, md: 4 }} mb={{ base: 10, md: 0 }} maxW={{ base: '100%', md: '240' }}>
          <Avatar
            size={'3xl'}
            name="Fernando Moreira"
            src={avatar?.src}
            bg={useColorModeValue('gray.100', 'gray.900')}
            borderColor={useColorModeValue('gray.400', 'gray.100')}
            borderWidth="2px"
            display={{ base: 'inline-block', md: 'flex' }}
            w={{ base: 140, lg: 220, md: 180 }}
            p={2}
          >
            <Tooltip label={availableText} color="white" placement="top" bg={availableBg} hasArrow>
              <AvatarBadge
                boxSize="1.2rem"
                bg={availableBg}
                borderColor={useColorModeValue('gray.100', 'gray.900')}
                cursor="pointer"
                right={{ base: 4, md: '35px' }}
                bottom={{ base: 4, md: '15px' }}
              />
            </Tooltip>
          </Avatar>
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
          <Social />
        </Box>
      </Container>
    </Stack>
  );
};
