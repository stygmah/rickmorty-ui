import { useState } from 'react';
import { Container, UserInfo, UserInfoMenu } from './styled';
import Image from 'next/image';
import Link from 'next/link';
import { useSession, signOut } from 'next-auth/react';

const NavBar = () => {
  const {status, data } = useSession();
  const [ menuVisible, setMenuVisible ] = useState(false);
  const toggleMenu = () => setMenuVisible(!menuVisible);
  const logout = () => {
    setMenuVisible(false);
    signOut();
  };

  return (
    <Container>
      <Link href="/">
        <Image src="/icon.png" height={50} width={40} alt="Icon"/>
      </Link>
      {status === 'authenticated' && <UserInfo onClick={toggleMenu}>{data?.user?.email} {'\u25BC'}</UserInfo>}
      <UserInfoMenu visible={menuVisible}>
        <button onClick={logout}>
          Log out {'\u2192'}
        </button>
      </UserInfoMenu>
    </Container>
  );
};

export default NavBar;