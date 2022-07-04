import style from './Button.module.css';

function Button({ children, onClick, isDisabled }) {
  return (
    <button
      type="submit"
      className={style.btn}
      onClick={onClick}
      disabled={isDisabled}
    >
      {children}
    </button>
  );
}

export default Button;
