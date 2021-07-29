import * as React from 'react';
import { Navbar, ThemeToogle } from '@components';
import { BlankLayout } from './blank';
import { Box } from '@chakra-ui/react';

type DefaultLayoutProps = {
  children: React.ReactNode;
  title: string;
  description: string;
  noSpace?: boolean;
};

export const DefaultLayout: React.FC<DefaultLayoutProps> = ({
  children,
  noSpace = false,
  ...seo
}: DefaultLayoutProps) => {
  return (
    <BlankLayout {...seo}>
      <Navbar
        links={[
          { href: '/', name: 'Home' },
          { href: '/sobre', name: 'Sobre' },
          { href: '/portfolio', name: 'Portfolio' },
          { href: '/contato', name: 'Contato' },
        ]}
      />
      {noSpace && <>{children}</>}
      {!noSpace && (
        <Box pt={16} pb={16}>
          {children}
        </Box>
      )}
      <ThemeToogle fixed />
    </BlankLayout>
  );
};
