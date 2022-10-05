import { Route } from 'react-router-dom';
import UnauthorizedPage from '../pages/ErrorPages/UnauthorizedPage';
import { useAuthCtx } from '../store/authContext';

function PrivateRoute({ children, ...rest }) {
  const { isLoggedIn } = useAuthCtx();
  return (
    <Route {...rest}>{isLoggedIn ? children : <UnauthorizedPage />}</Route>
  );
}

export default PrivateRoute;
