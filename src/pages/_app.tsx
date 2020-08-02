import { Fragment } from 'react';
import { AppProps } from 'next/app';
import { GlobalStyles } from '@nandomoreira/styles';

function App({ Component, pageProps }: AppProps) {
  return (
    <Fragment>
      <GlobalStyles />
      <Component {...pageProps} />
    </Fragment>
  );
}

export default App;
