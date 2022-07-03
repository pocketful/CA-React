import { NavLink } from 'react-router-dom';
import style from './Header.module.css';
import Flex from '../UI/Flex/Flex';

function Header() {
  return (
    <header className={style.header}>
      <Flex>
        <img className={style.img} src="logo.png" alt="React logo" />
        <nav className={style.nav}> 
          <NavLink to="/login">Login</NavLink>
          <NavLink to="/register">Register</NavLink>
          <NavLink exact to="/">Home</NavLink>
          <NavLink to="/add">Add</NavLink>
          <NavLink to="/logout">Logout</NavLink>
        </nav>
      </Flex>
    </header>
  );
}

export default Header;
