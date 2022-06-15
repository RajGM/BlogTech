import '../styles/globals.css'

import {GetServerSideProps} from 'next/app';

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}

export default MyApp
