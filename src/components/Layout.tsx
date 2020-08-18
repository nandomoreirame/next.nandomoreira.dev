import React, { memo } from 'react';
import { ThemeProvider, DefaultTheme } from 'styled-components';
import { GlobalStyles } from '@nandomoreira/styles';
import { Skippy, Header, Footer } from '@nandomoreira/components';

type LayoutProps = {
  children: React.ReactNode;
  theme: DefaultTheme;
};

const Layout: React.FC<LayoutProps> = ({ children, theme }: LayoutProps) => (
  <ThemeProvider theme={theme}>
    <GlobalStyles />
    <Skippy />
    <Header />
    <main id="mainContent">{children}</main>
    <Footer />
  </ThemeProvider>
);

export default memo(Layout);
