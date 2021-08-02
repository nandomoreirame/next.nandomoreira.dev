import * as React from 'react';
import { Navbar } from '@components';
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
      {noSpace && <main>{children}</main>}
      {!noSpace && (
        <Box as="main" pt={16} pb={16}>
          {children}
        </Box>
      )}
    </BlankLayout>
  );
};
