import * as React from 'react';
import {
  Box,
  Container,
  Stack,
  chakra,
  useColorModeValue,
  Text,
  Icon,
  AvatarBadge,
  Tooltip,
  Avatar,
} from '@chakra-ui/react';
import avatar from '@images/avatar.png';
import { Social, SocialLinkProps } from '@components';
import {
  AiFillLinkedin,
  AiOutlineBehance,
  AiOutlineCodepen,
  AiOutlineDribbble,
  AiOutlineGithub,
  AiOutlineInstagram,
  AiOutlineTwitter,
  AiOutlineWhatsApp,
} from 'react-icons/ai';
import { whatsappLink } from '@util';

const socialLinks: SocialLinkProps[] = [
  {
    title: 'Whatsapp',
    link: whatsappLink(),
    icon: <Icon as={AiOutlineWhatsApp} boxSize="26px" />,
  },
  {
    title: 'Github',
    link: 'https://github.com/nandomoreirame',
    icon: <Icon as={AiOutlineGithub} boxSize="26px" />,
  },
  {
    title: 'Twitter',
    link: 'https://twitter.com/oseunando',
    icon: <Icon as={AiOutlineTwitter} boxSize="26px" />,
  },
  {
    title: 'Instagram',
    link: 'https://instagram.com/oseunando',
    icon: <Icon as={AiOutlineInstagram} boxSize="26px" />,
  },
  {
    title: 'Codepen.io',
    link: 'https://codepen.io/oseunando',
    icon: <Icon as={AiOutlineCodepen} boxSize="26px" />,
  },
  {
    title: 'LinkedIn',
    link: 'https://linkedin.com/in/nandomoreirame',
    icon: <Icon as={AiFillLinkedin} boxSize="26px" />,
  },
  {
    title: 'Dribbble',
    link: 'https://dribbble.com/umdevux',
    icon: <Icon as={AiOutlineDribbble} boxSize="26px" />,
  },
  {
    title: 'Behance',
    link: 'https://www.behance.net/umdevux',
    icon: <Icon as={AiOutlineBehance} boxSize="26px" />,
  },
];

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
      w="100vw"
      display="flex"
      alignItems="center"
      justifyContent="center"
      bg={useColorModeValue('gray.100', 'gray.900')}
    >
      <Container maxW="container.lg" display="flex" alignItems="center">
        <Box pr={4} maxW="240px">
          <Avatar
            size={'3xl'}
            name="Fernando Moreira"
            src={avatar?.src}
            bg={useColorModeValue('gray.100', 'gray.900')}
            borderColor={useColorModeValue('gray.400', 'gray.100')}
            borderWidth="2px"
            p={2}
          >
            <Tooltip label={availableText} color="white" placement="top" bg={availableBg} hasArrow>
              <AvatarBadge
                boxSize="1.2rem"
                bg={availableBg}
                borderColor={useColorModeValue('gray.100', 'gray.900')}
                cursor="pointer"
                right="35px"
                bottom="15px"
              />
            </Tooltip>
          </Avatar>
        </Box>
        <Box pl={4}>
          <Text
            color={useColorModeValue('gray.500', 'gray.400')}
            fontSize={{ base: 'lg', lg: 'xl' }}
            fontFamily="heading"
            letterSpacing="tight"
            mb="3"
          >
            Olá, eu sou o Fernando!
          </Text>
          <chakra.h1
            fontSize={{ base: '1.65rem', sm: '2rem', lg: '2.3rem' }}
            fontFamily="heading"
            letterSpacing="tight"
            fontWeight="extrabold"
            lineHeight="1.4"
          >
            Ajudo empresas a criar projetos web personalizados, de alta qualidade e com{' '}
            <Text as="span" color={useColorModeValue('teal.800', 'teal.300')}>
              tecnologias criativas.
            </Text>
          </chakra.h1>
          <Social links={socialLinks} />
        </Box>
      </Container>
    </Stack>
  );
};
