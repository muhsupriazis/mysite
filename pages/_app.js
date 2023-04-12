import '@/styles/globals.css'
import NextNProgress from 'nextjs-progressbar';

export default function App({ Component, pageProps }) {
  return <>
    <NextNProgress height={3} showOnShallow={false}  options={{showSpinner: false}} />
    <Component {...pageProps} />
  </>
}
