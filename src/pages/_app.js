import '@/styles/globals.css';
import { Montserrat } from '@next/font/google';
import NavBar from '@/components/NavBar';

const montserrat = Montserrat({ subsets: ['latin'] })

export default function App({ Component, pageProps }) {
  return(
    <>
            <NavBar/>
      <main className={montserrat.className}>
          <Component {...pageProps} />
      </main>

    </>

  )
}
