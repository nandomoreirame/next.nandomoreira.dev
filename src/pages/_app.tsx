import { Fragment } from 'react';
import { AppProps } from 'next/app';
import withDarkMode from 'next-dark-mode';
import { GlobalStyles } from '@nandomoreira/styles';
import { Head } from '@nandomoreira/components';

function App({ Component, pageProps }: AppProps) {
  return (
    <Fragment>
      <Head />
      <GlobalStyles />
      <Component {...pageProps} />
    </Fragment>
  );
}

export default withDarkMode(App);
