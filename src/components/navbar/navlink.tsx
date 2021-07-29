import * as React from 'react';
import { Button, useColorModeValue } from '@chakra-ui/react';
import { useRouter } from 'next/dist/client/router';
import NextLink from 'next/link';

export interface NavLinkProps {
  href: string;
  name: string;
}

export const NavLink: React.FC<NavLinkProps> = ({ href, name, ...rest }: NavLinkProps) => {
  const { pathname } = useRouter();
  const [isActive, setActive] = React.useState(false);

  React.useEffect(() => {
    if (href !== '/') {
      const [, group] = href.split('/');
      setActive(pathname.includes(group));
    } else {
      if (href === pathname) {
        setActive(true);
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname]);

  return (
    <NextLink href={href} passHref>
      <Button
        aria-current={isActive ? 'page' : undefined}
        variant="ghost"
        size="md"
        {...rest}
        _activeLink={{
          color: useColorModeValue('blue.500', 'blue.200'),
        }}
        px={4}
      >
        {name}
      </Button>
    </NextLink>
  );
};
