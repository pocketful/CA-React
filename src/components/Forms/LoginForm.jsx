import { useFormik } from 'formik';
import { useContext, useState } from 'react';
import { useHistory } from 'react-router-dom';
import * as Yup from 'yup';
import { postFetch } from '../../helpers/fetch';
import {
  inputFeedback,
  inputFeedbackText,
} from '../../helpers/inputFeedback/inputFeedback';
import AuthContext from '../../store/authContext';
import Button from '../UI/Button/Button';
import style from './LoginForm.module.css';

const endpoint = 'v1/auth/login';

const initialValues = {
  email: '',
  password: '',
};

function LoginForm() {
  let history = useHistory();
  const [feedbackCommon, setFeedbackCommon] = useState({ msg: '', class: '' });
  const { login } = useContext(AuthContext);

  const formik = useFormik({
    initialValues,
    validationSchema: Yup.object({
      email: Yup.string().email('invalid email address').required(),
      password: Yup.string().min(4, 'min 4 characters').max(20).required(),
    }),
    onSubmit: async (values) => {
      console.log('submitted values: ', values);
      const result = await postFetch(endpoint, values);
      console.log('result: ', result);
      if (!result.token) {
        setFeedbackCommon({ msg: result.err, class: 'danger' });
        return;
      }
      setFeedbackCommon({ msg: result.msg, class: 'success' });
      login(values.email);
      setTimeout(() => {
        history.replace('/');
      }, 2000);
    },
  });

  // console.log('formik.errors:', formik.errors);

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
          <Button isDisabled={!(formik.dirty && formik.isValid)}>
            Sign In
          </Button>
        </div>
        {feedbackCommon && (
          <p className={style[feedbackCommon.class]}>{feedbackCommon.msg}</p>
        )}
      </form>
    </div>
  );
}

export default LoginForm;
