import 'swiper/css';
import 'swiper/css/pagination';

import '../styles/globals.css';
import '../styles/theme.css';

import AOS from 'aos';
import 'aos/dist/aos.css';

import type { AppProps } from 'next/app';
import Head from 'next/head';
import { useEffect } from 'react';

function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    AOS.init({
      easing: 'ease-in-out',
    });
  }, []);

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
