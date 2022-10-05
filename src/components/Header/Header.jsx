import { Link, NavLink } from 'react-router-dom';
import style from './Header.module.css';
import Flex from '../UI/Flex/Flex';
import logo from '../../assets/img/logo.png';
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
              <NavLink exact to="/" activeClassName={style.active}>Home</NavLink>
              <NavLink to="/add" activeClassName={style.active}>Add</NavLink>
              <Link to="/login" onClick={logout}>Logout</Link>
            </>
          )}
          {!isLoggedIn && (
            <>
              <NavLink to="/login" activeClassName={style.active}>Login</NavLink>
              <NavLink to="/register" activeClassName={style.active}>Register</NavLink>
            </>
          )}
        </nav>
      </Flex>
    </header>
  );
}

export default Header;
