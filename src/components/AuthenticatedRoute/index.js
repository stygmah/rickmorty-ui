import { useSession } from 'next-auth/react';
import { useEffect } from 'react';
import { useRouter } from 'next/router';

const AuthenticatedRoute = ({children}) => {
  const {status} = useSession();
  const router = useRouter();
  useEffect(() => {
    if(status === 'unauthenticated') {
      router.push('/login');
    }
  }, [status]);
  return (
    <>
      {children}
    </>
  );
};

export default AuthenticatedRoute;