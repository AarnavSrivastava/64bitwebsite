import '../styles/globals.css'
import Navbar from "../components/navbar.js";
import Head from "next/head"

function MyApp({ Component, pageProps }) {
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
      <div className="flex flex-col justify-start relative overflow-x-hidden bg-white h-screen">
        <div className='flex flex-row'>
          <Navbar />
          <div className="pl-[15vw]">
            <Component {...pageProps} />
          </div>
        </div>
      </div>
    </>
  ) 
}

export default MyApp
