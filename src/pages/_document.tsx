import * as React from 'react';
import NextDocument, { Html, Head, Main, NextScript, DocumentContext } from 'next/document';
import { ColorModeScript } from '@chakra-ui/react';
import { themeConfig } from '@theme';

import 'regenerator-runtime/runtime';

class Document extends NextDocument<{}> {
  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await NextDocument.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html lang="pt-br">
        <Head>
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
          <link
            href="https://fonts.googleapis.com/css2?family=Montserrat:wght@600;700;800;900&display=swap"
            rel="stylesheet"
          />
        </Head>
        <body>
          <ColorModeScript initialColorMode={themeConfig.initialColorMode} />
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default Document;
