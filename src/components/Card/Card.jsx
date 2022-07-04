import style from './Card.module.css';

function Card({ title, description }) {
  return (
    <article className={style.card}>
      <h3 className={style.title}>{title}</h3>
      <p className={style.text}>{description}</p>
    </article>
  );
}

export default Card;
