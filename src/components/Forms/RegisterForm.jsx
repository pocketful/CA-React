import Button from '../UI/Button/Button';
import style from './Form.module.css';

function RegisterForm() {
  return (
    <div className={style.wrapper}>
      <h2>Don't have an account?</h2>
      <form>
        <div className={style.group}>
          <input
            type="email"
            name="email"
            placeholder="Email"
            className={style.input}
          />
        </div>
        <div className={style.group}>
          <input
            type="password"
            name="password"
            placeholder="Password"
            className={style.input}
          />
        </div>
        <div className={style.group}>
          <input
            type="passwordRef"
            name="passwordRef"
            placeholder="Confirm Password"
            className={style.input}
          />
        </div>
        <div className={style.group}>
          <Button>Sign Up</Button>
        </div>
      </form>
    </div>
  );
}

export default RegisterForm;
