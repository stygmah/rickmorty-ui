import { useRouter } from 'next/router';
import Head from 'next/head';
import { Inter } from '@next/font/google';
import AuthenticatedRoute from '@/components/AuthenticatedRoute';
import { Container, Button } from '@/styles/index.styled';

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const router = useRouter();

  return (
    <AuthenticatedRoute>
    <Head>
      <title> Rick and Morty App </title>
      <meta name="description" content="Rick and morty app" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="icon" href="/favicon.ico" />
    </Head>
      <Container>
        <h1>Welcome to Rick & Morty webapp</h1>
        <p>A simple way to browse Rick and Morty characters from all the multiverse</p>
        <Button onClick={()=>router.push('/characters/1')}>Browse Characters</Button>
      </Container>
    </AuthenticatedRoute>
  )
}
