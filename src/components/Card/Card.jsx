import style from './Card.module.css';
import PropTypes from 'prop-types';

function Card({ title, description }) {
  return (
    <article className={style.card}>
      <h3 className={style.title}>{title}</h3>
      <p className={style.text}>{description}</p>
    </article>
  );
}

Card.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
};

export default Card;
