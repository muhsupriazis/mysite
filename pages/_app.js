import '@/styles/globals.css'
import NextNProgress from 'nextjs-progressbar';
import dynamic from 'next/dynamic'

const AnimatedCursor = dynamic(() => import('react-animated-cursor'), {
  ssr: false
});


export default function App({ Component, pageProps }) {
  return <>
    <NextNProgress height={3} showOnShallow={false} color='#fde68a'  options={{showSpinner: false}} />
    <Component {...pageProps} />
    <AnimatedCursor
    color={'1,1,1'}
    outerAlpha={0.2}
    innerScale={1}
    outerScale={7}
    />
  </>
}
