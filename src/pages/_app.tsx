import { AppProps } from 'next/app';
import { ChakraProvider, CSSReset } from '@chakra-ui/react';
import { Global } from '@emotion/react';
import { GlobalStyles, theme } from '@theme';

function App({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <CSSReset />
      <Global styles={GlobalStyles} />
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default App;
