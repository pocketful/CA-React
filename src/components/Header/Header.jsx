import { Link, NavLink } from 'react-router-dom';
import style from './Header.module.css';
import Flex from '../UI/Flex/Flex';
import logo from '../../assets/logo.png';
import { useAuthCtx } from '../../store/authContext';

function Header() {
  const { isLoggedIn, logout } = useAuthCtx();
  return (
    <header className={style.header}>
      <Flex jc="spaceBetween">
        <img className={style.img} src={logo} alt="React logo" />
        <nav className={style.nav}>
          {isLoggedIn && (
            <>
              <NavLink exact to="/">Home</NavLink>
              <NavLink to="/add">Add</NavLink>
              <Link to="/login" onClick={logout}>Logout</Link>
            </>
          )}
          {!isLoggedIn && (
            <>
              <NavLink to="/login">Login</NavLink>
              <NavLink to="/register">Register</NavLink>
            </>
          )}
        </nav>
      </Flex>
    </header>
  );
}

export default Header;
