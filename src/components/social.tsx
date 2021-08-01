import * as React from 'react';
import { Box, Button, Icon, Tooltip, useColorModeValue } from '@chakra-ui/react';
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

export type SocialLinkProps = {
  readonly title: string;
  readonly link: string;
  readonly icon: React.ReactNode;
};

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

export const Social: React.FC = () => {
  const tooltipBg = useColorModeValue('gray.900', 'white');
  const tooltipColor = useColorModeValue('white', 'gray.900');
  const beforeNav = {
    content: '""',
    backgroundColor: useColorModeValue('gray.900', 'gray.100'),
    opacity: 0.5,
    width: '100px',
    marginRight: '10px',
    display: 'inline-block',
    height: '1px',
  };

  return (
    <React.Fragment>
      {socialLinks && (
        <Box
          as="nav"
          alignItems={{ md: 'center' }}
          display={{ base: 'block', md: 'flex' }}
          textAlign={'center'}
          justifyContent={{ md: 'flex-start' }}
          _before={{ lg: beforeNav }}
          mt={5}
        >
          {socialLinks.map(({ link, title, icon }: SocialLinkProps) => (
            <Tooltip
              key={link}
              label={title}
              color={tooltipColor}
              placement="top"
              bg={tooltipBg}
              hasArrow
            >
              <Button
                display="inline-block"
                variant="ghost"
                size="md"
                rounded="md"
                p={2}
                mx={2}
                href={link}
                transition="all .23s ease-in-out"
              >
                {icon}
              </Button>
            </Tooltip>
          ))}
        </Box>
      )}
    </React.Fragment>
  );
};
