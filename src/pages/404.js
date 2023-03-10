import React from 'react';
import Image from 'next/image';
import Head from 'next/head';

import {
  Container,
} from '../styles/404.styled';

const ErrorPage = () => {
  return (
    <>
    <Head>
      <title>404 - Rick and Morty App </title>
      <meta name="description" content="Rick and morty app" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="icon" href="/favicon.ico" />
    </Head>
      <Container>
        <h1>Not Found</h1>
        <Image src="/404.png" alt="404" width={200} height={200} />
        <p>Uh-oh, it looks like you've landed on a different dimension. The page you're searching for is nowhere to be found. </p>
      </Container>
    </>
  );
};

export default ErrorPage;