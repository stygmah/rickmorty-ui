import React from 'react';
import { Container } from './styled';
import Image from 'next/image';
import Link from 'next/link';

const NavBar = () => {
  return (
    <Container>
      <Link href="/">
        <Image src="/icon.png" height={50} width={40} alt="Icon"/>
      </Link>
    </Container>
  );
};

export default NavBar;