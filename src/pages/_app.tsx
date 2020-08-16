import { Fragment } from 'react';
import { AppProps } from 'next/app';
import withDarkMode, { useDarkMode } from 'next-dark-mode';
import { GlobalStyles, theme } from '@nandomoreira/styles';
import { Head } from '@nandomoreira/components';
import { ThemeProvider } from 'styled-components';

function App({ Component, pageProps }: AppProps) {
  const { darkModeActive } = useDarkMode();

  return (
    <Fragment>
      <Head />
      <ThemeProvider theme={darkModeActive ? theme.dark : theme.light}>
        <GlobalStyles />
        <Component {...pageProps} />
      </ThemeProvider>
    </Fragment>
  );
}

export default withDarkMode(App);
