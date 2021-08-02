import * as React from 'react';
import {
  Box,
  Container,
  HStack,
  useColorModeValue,
  Heading,
  ScaleFade,
  Icon,
  useDisclosure,
  Text,
} from '@chakra-ui/react';
import { IoMenuOutline } from 'react-icons/io5';
import NextLink from 'next/link';
import { NavLink, NavLinkProps } from './navlink';
import { MobileMenuButton } from './mobile-menu-button';
import { MobileNav } from './mobile-nav';

type NavbarProps = {
  links: Array<NavLinkProps>;
};

export const Navbar: React.FC<NavbarProps> = ({ links = [] }: NavbarProps) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <MobileNav links={links} isOpen={isOpen} onClose={onClose} />
      <Box
        as="header"
        position="fixed"
        w="100%"
        zIndex={99}
        bg={useColorModeValue('white', 'gray.800')}
        borderBottomWidth="2px"
        borderBottomColor={useColorModeValue('gray.100', 'gray.700')}
        shadow="0 0 10px 0 rgba(0,0,0, 0.035);"
      >
        <Container maxW="container.lg">
          <HStack justify="space-between" w="100%" h={16}>
            <Heading
              px={{ base: 4, md: 2 }}
              color={useColorModeValue('gray.900', 'white')}
              fontSize={{ base: '1.42rem' }}
              _before={{ content: '"{ "' }}
              _after={{ content: '" }"' }}
              cursor="pointer"
            >
              <NextLink href="/" passHref>
                <>
                  nando
                  <Text as="span" color={useColorModeValue('teal.800', 'teal.500')}>
                    moreira
                  </Text>
                </>
              </NextLink>
            </Heading>

            <HStack ml={-4} spacing={2} display={{ base: 'none', md: 'block' }}>
              {links.length > 0 &&
                links.map(({ href, name }) => <NavLink key={href} href={href} name={name} />)}
            </HStack>

            <Box display={{ base: 'inline-block', md: 'none' }}>
              <MobileMenuButton
                icon={
                  <ScaleFade initialScale={0.9} in>
                    <Icon as={IoMenuOutline} boxSize="36px" />
                  </ScaleFade>
                }
                onClick={onOpen}
              />
            </Box>
          </HStack>
        </Container>
      </Box>
    </>
  );
};
