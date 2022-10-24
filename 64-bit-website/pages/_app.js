import '../styles/globals.css'
import Navbar from "../components/navbar.js";
import Head from "next/head"
import { useCallback, useEffect } from 'react';
import { useRouter } from 'next/router';

function MyApp({ Component, pageProps }) {
  const router = useRouter();

  const handleScrollTop = useCallback(() => {
    const frame = requestAnimationFrame(() => {
      window.scroll({
        top: 0,
        left: 0,
        behavior: 'smooth'
      });
    });
    return () => window.cancelAnimationFrame(frame);
  }, []);

  useEffect(() => {
    router.events.on('routeChangeComplete', handleScrollTop);
    return () => router.events.off('routeChangeComplete', handleScrollTop);
  }, [ handleScrollTop, router ]);

  return (
    <>
      <Head>
          <title>64 Bit Jazz Combo</title>
          <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
          <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
          <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
          <link rel="manifest" href="/site.webmanifest" />
          <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#144c5b" />
          <meta name="msapplication-TileColor" content="#da532c" />
          <meta name="theme-color" content="#ffffff" />
      </Head>
      <div className="flex flex-col justify-start relative bg-white h-full">
        <div className='flex flex-row'>
          <Navbar />
          <Component {...pageProps} />
        </div>
      </div>
    </>
  ) 
}

export default MyApp
