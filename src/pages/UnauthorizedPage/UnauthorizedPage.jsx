import { Link } from 'react-router-dom';
import Button from '../../components/UI/Button/Button';
import style from './UnauthorizedPage.module.css';

function UnauthorizedPage() {
  return (
    <div className={style.wrapper}>
      <p className={style.title}>401</p>
      <p className={style.subtitle}>Unauthorized</p>
      <p className={style.text}>
        The page you're trying to reach is for members only. Please register or
        login.
      </p>
      <div className={style.btnWrapper}>
        <Link to="/login">
          <Button>Go to login page</Button>
        </Link>
        <Link to="/register">
          <Button>Go to register page</Button>
        </Link>
      </div>
    </div>
  );
}

export default UnauthorizedPage;
