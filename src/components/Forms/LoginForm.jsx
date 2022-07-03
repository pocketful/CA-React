import Button from '../UI/Button/Button';
import style from './LoginForm.module.css';

function LoginForm() {
  return (
    <div className={style.wrapper}>
      <h2>Have an account?</h2>
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
          <Button>Sign In</Button>
        </div>
      </form>
    </div>
  );
}

export default LoginForm;
