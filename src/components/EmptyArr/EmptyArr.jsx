import { Link } from 'react-router-dom';
import Button from '../UI/Button/Button';
import style from './EmptyArr.module.css';

function EmptyArr({ name, link }) {
  return (
    <div className={style.wrapper}>
      <p className={style.text}>There are no {name} yet. Please add.</p>
      <Link to={link}>
        <Button>Go to add page</Button>
      </Link>
    </div>
  );
}

export default EmptyArr;
