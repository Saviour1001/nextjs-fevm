import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Layout from '../components/Layout'
import NextProgress from "next-progress";
function MyApp({ Component, pageProps }: AppProps) {
  return(
  <>
    <NextProgress />
    <Layout>
      <Component {...pageProps} />
    </Layout>
  </>
  )
}

export default MyApp
