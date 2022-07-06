import { Route } from 'react-router-dom';
import { useAuthCtx } from '../store/authContext';
import UnauthorizedPage from '../pages/UnauthorizedPage/UnauthorizedPage';

function PrivateRoute({ children, ...rest }) {
  const { isLoggedIn } = useAuthCtx();
  return <Route {...rest}>{isLoggedIn ? children : <UnauthorizedPage />}</Route>;
}
export default PrivateRoute;