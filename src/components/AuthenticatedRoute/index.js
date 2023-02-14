import { useSession } from 'next-auth/react';
import { useEffect } from 'react';
import { useRouter } from 'next/router';
import PropTypes from 'prop-types';
import { AUTH_STATUS } from '../../constants/nextauth';

const AuthenticatedRoute = ({ children }) => {
  const { status } = useSession();
  const router = useRouter();
  useEffect(() => {
    if (status !== AUTH_STATUS.AUTHENTICATED) {
      router.push('/login');
    }
  }, [status]);
  return <>{children}</>;
};

AuthenticatedRoute.propTypes = {
  children: PropTypes.node.isRequired,
};

export default AuthenticatedRoute;
