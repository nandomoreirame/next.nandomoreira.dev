import { AppProps } from 'next/app';
import withDarkMode, { useDarkMode, MODE } from 'next-dark-mode';
import { Head, Layout } from '@nandomoreira/components';
import { theme } from '@nandomoreira/styles';

function App({ Component, pageProps }: AppProps) {
  const { darkModeActive } = useDarkMode();

  return (
    <Layout theme={darkModeActive ? theme.dark : theme.light}>
      <Head />
      <Component {...pageProps} />
    </Layout>
  );
}

export default withDarkMode(App, {
  autoModeCookieName: `nandomoreira.dev-automode`,
  darkModeCookieName: `nandomoreira.dev-darkmode`,
  defaultMode: MODE.DARK,
  provider: true,
});
