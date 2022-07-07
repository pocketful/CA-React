import { Link } from 'react-router-dom';
import Button from '../UI/Button/Button';
import style from './EmptyArr.module.css';
import PropTypes from 'prop-types';

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

EmptyArr.propTypes = {
  name: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
};

export default EmptyArr;
