import '@/styles/globals.css';
import { Montserrat } from '@next/font/google';
import NavBar from '@/components/NavBar';
import { SessionProvider } from 'next-auth/react';

const montserrat = Montserrat({ subsets: ['latin'] })

export default function App({ Component, pageProps }) {
  return(
    <SessionProvider session={pageProps.session}>
      <NavBar/>
      <main className={montserrat.className}>
          <Component {...pageProps} />
      </main>

    </SessionProvider>

  )
}
