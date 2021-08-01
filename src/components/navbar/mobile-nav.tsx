import {
  Box,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  Stack,
} from '@chakra-ui/react';
import { Social } from 'components/social';
import * as React from 'react';
import { NavLink, NavLinkProps } from './navlink';

type MobileNavProps = {
  links?: Array<NavLinkProps>;
  isOpen?: boolean;
  onClose?: () => void;
};

export const MobileNav: React.FC<MobileNavProps> = ({
  isOpen = false,
  onClose,
  links = [],
}: MobileNavProps) => {
  return (
    <Drawer isOpen={isOpen} placement="right" onClose={() => (onClose ? onClose() : null)}>
      <DrawerOverlay />
      <DrawerContent>
        <DrawerCloseButton />
        <DrawerHeader borderBottomWidth="1px">Navegação</DrawerHeader>
        <DrawerBody>
          <Stack spacing="24px">
            <Box>
              {links &&
                links.length > 0 &&
                links.map(({ href, name }) => <NavLink key={href} href={href} name={name} />)}
            </Box>
          </Stack>
        </DrawerBody>

        <DrawerFooter>
          <Social />
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
};
