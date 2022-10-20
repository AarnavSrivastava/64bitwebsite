import '../styles/globals.css'
import Navbar from "../components/navbar.js";

function MyApp({ Component, pageProps }) {
  return (
    <div className="overflow-x-hidden bg-white h-screen">
      <Navbar />
      <Component {...pageProps} />
    </div>
  ) 
}

export default MyApp
