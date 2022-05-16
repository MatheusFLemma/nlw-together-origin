import '../styles/globals.css';
import '../styles/theme.css';

import type { AppProps } from 'next/app';
import Head from 'next/head';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Beauty Salon</title>
      </Head>

      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
