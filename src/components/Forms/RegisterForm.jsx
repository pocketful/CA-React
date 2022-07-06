import { useFormik } from 'formik';
import Button from '../UI/Button/Button';
import style from './Form.module.css';

const initialValues = {
  // email: 'hermionegranger@email.com',
  // password: 'secret123',
  // passwordRef: 'secret123',
  email: '',
  password: '',
  passwordRef: '',
};

function RegisterForm() {
  const formik = useFormik({
    initialValues,
    onSubmit: async (values) => {
      console.log('submitted values: ', values);
    },
  });
  return (
    <div className={style.wrapper}>
      <h2>Don't have an account?</h2>
      <form onSubmit={formik.handleSubmit}>
        <div className={style.group}>
          <input
            type="email"
            name="email"
            placeholder="Email"
            className={style.input}
            onChange={formik.handleChange}
            value={formik.values.email}
          />
        </div>
        <div className={style.group}>
          <input
            type="password"
            name="password"
            placeholder="Password"
            className={style.input}
            onChange={formik.handleChange}
            value={formik.values.password}
          />
        </div>
        <div className={style.group}>
          <input
            type="password"
            name="passwordRef"
            placeholder="Confirm Password"
            className={style.input}
            onChange={formik.handleChange}
            value={formik.values.passwordRef}
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
