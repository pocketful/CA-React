import style from './Button.module.css';

function Button({ children, onClick }) {
  return (
    <button type="submit" className={style.btn} onClick={onClick}>
      {children}
    </button>
  );
}

export default Button;
