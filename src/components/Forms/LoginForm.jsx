import { useFormik } from 'formik';
import { useState } from 'react';
import * as Yup from 'yup';
import { postFetch } from '../../helpers/fetch';
import { inputFeedback, inputFeedbackText } from '../../helpers/inputFeedback/inputFeedback';
import { useAuthCtx } from '../../store/authContext';
import Button from '../UI/Button/Button';
import style from './Form.module.css';

const endpoint = 'v1/auth/login';

const initialValues = {
  email: '',
  password: '',
};

function LoginForm({ onSuccessLogin }) {
  const [feedbackCommon, setFeedbackCommon] = useState({ msg: '', class: '' });
  const { login } = useAuthCtx();

  const formik = useFormik({
    initialValues,
    validationSchema: Yup.object({
      email: Yup.string().email('invalid email address').required(),
      password: Yup.string()
        .min(4, 'min 4 characters')
        .max(50, 'max 50 characters')
        .required(),
    }),
    onSubmit: async (values) => {
      const result = await postFetch(endpoint, values);
      console.log('result: ', result);
      if (!result.token) {
        setFeedbackCommon({ msg: result.err, class: 'danger' });
        return;
      }
      setFeedbackCommon({ msg: result.msg, class: 'success' });
      login(result.token, values.email);
      setTimeout(() => {
        onSuccessLogin();
      }, 2000);
    },
  });

  return (
    <>
      <h2>Have an account?</h2>
      <form onSubmit={formik.handleSubmit} className={style.wrapper}>
        <div className={style.group}>
          <input
            type="email"
            name="email"
            placeholder="Email"
            className={`${style.input} ${inputFeedback('email', formik)}`}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.email}
          />
          {inputFeedbackText('email', formik)}
        </div>
        <div className={style.group}>
          <input
            type="password"
            name="password"
            placeholder="Password"
            className={`${style.input} ${inputFeedback('password', formik)}`}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.password}
          />
          {inputFeedbackText('password', formik)}
        </div>
        <div className={style.group}>
          <Button type="submit" isDisabled={!(formik.dirty && formik.isValid)}>
            Sign In
          </Button>
        </div>
        {feedbackCommon.msg.length !== 0 && (
          <p className={style[feedbackCommon.class]}>{feedbackCommon.msg}</p>
        )}
      </form>
    </>
  );
}

export default LoginForm;
