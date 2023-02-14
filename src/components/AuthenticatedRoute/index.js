import { useSession } from 'next-auth/react';
import { useEffect } from 'react';
import { useRouter } from 'next/router';
import PropTypes from 'prop-types';
import { AUTH_STATUS } from '../../constants/nextauth';

const AuthenticatedRoute = ({ children }) => {
  const { status } = useSession();
  const router = useRouter();

  const isAuthenticated = () => status === AUTH_STATUS.AUTHENTICATED;

  useEffect(() => {
    if (!isAuthenticated()) {
      router.push('/login');
    }
  }, [status]);
  return isAuthenticated() ? <>{children}</> : null;
};

AuthenticatedRoute.propTypes = {
  children: PropTypes.node.isRequired,
};

export default AuthenticatedRoute;
