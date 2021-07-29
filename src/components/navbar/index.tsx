import { Box, Container, HStack, useColorModeValue, Heading } from '@chakra-ui/react';
import * as React from 'react';
import NextLink from 'next/link';
import { NavLink, NavLinkProps } from './navlink';

type NavbarProps = {
  links: Array<NavLinkProps>;
};

export const Navbar: React.FC<NavbarProps> = ({ links = [] }: NavbarProps) => {
  return (
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
          <Heading>
            <NextLink href="/" passHref>
              n
            </NextLink>
          </Heading>

          <HStack ml={-4} spacing={2} display={{ base: 'none', md: 'block' }}>
            {links.length > 0 &&
              links.map(({ href, name }) => <NavLink key={href} href={href} name={name} />)}
          </HStack>
        </HStack>
      </Container>
    </Box>
  );
};
