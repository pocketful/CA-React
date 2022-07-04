import { useFormik } from 'formik';
import { useState } from 'react';
import * as Yup from 'yup';
import Button from '../UI/Button/Button';
import style from './LoginForm.module.css';

const initialValues = {
  email: '',
  password: '',
};

function LoginForm() {
  const [feedbackMsg, setFeedbackMsg] = useState('');

  const formik = useFormik({
    initialValues,
    validationSchema: Yup.object({
      email: Yup.string().email('invalid email address').required(),
      password: Yup.string().min(4, 'min 4 characters').max(20).required(),
    }),
    onSubmit: async (values) => {
      console.log('submitted values: ', values);
    },
  });

  console.log('formik.errors:', formik.errors);

  return (
    <div className={style.wrapper}>
      <h2>Have an account?</h2>
      <form onSubmit={formik.handleSubmit}>
        <div className={style.group}>
          <input
            // type="email" // TODO
            type="text"
            name="email"
            placeholder="Email"
            className={`${style.input} ${
              formik.touched.password && formik.errors.email ? style.inputErr : ''
            }`}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.email}
          />
          {formik.touched.password && formik.errors.email && (
            <p className={style.inputErrMsg}>{formik.errors.email}</p>
          )}
        </div>

        <div className={style.group}>
          <input
            type="password"
            name="password"
            placeholder="Password"
            className={`${style.input} ${
              formik.touched.password && formik.errors.password ? style.inputErr : ''
            }`}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.password}
          />
          {formik.touched.password && formik.errors.password && (
            <p className={style.inputErrMsg}>{formik.errors.password}</p>
          )}
        </div>
        <div className={style.group}>
          <Button isDisabled={!(formik.dirty && formik.isValid)}>Sign In</Button>
        </div>
        {feedbackMsg && <p className={style.feedback}>{feedbackMsg}</p>}
      </form>
    </div>
  );
}

export default LoginForm;
