import '../styles/globals.scss'
import 'bootstrap/dist/css/bootstrap.css'
import type { AppProps } from 'next/app'

//home style 
import '../styles/header/header.scss'

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}

export default MyApp
