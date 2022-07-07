import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useState } from 'react';
import { inputFeedback, inputFeedbackText } from '../../helpers/inputFeedback/inputFeedback';
import { postFetch } from '../../helpers/fetch';
import Button from '../UI/Button/Button';
import style from './Form.module.css';

const endpoint = 'v1/auth/register';

const initialValues = {
  email: '',
  password: '',
  passwordRef: '',
};

function RegisterForm({ onSuccessRegister }) {
  const [feedbackCommon, setFeedbackCommon] = useState({ msg: '', class: '' });

  const formik = useFormik({
    initialValues,
    validationSchema: Yup.object({
      email: Yup.string().email('invalid email address').required(),
      password: Yup.string()
        .min(4, 'min 4 characters')
        .max(50, 'max 50 characters')
        .required(),
      passwordRef: Yup.string()
        .required('please retype your password')
        .oneOf([Yup.ref('password'), null], 'passwords must match'),
    }),
    onSubmit: async (values) => {
      const result = await postFetch(endpoint, {
        email: values.email,
        password: values.password,
      });
      console.log('result: ', result);
      if (result.err) {
        setFeedbackCommon({ msg: result.err, class: 'danger' });
        return;
      }
      setFeedbackCommon({
        msg: 'New user successfully created',
        class: 'success',
      });
      setTimeout(() => {
        onSuccessRegister();
      }, 2000);
    },
  });

  return (
    <>
      <h2>Don't have an account?</h2>
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
          <input
            type="password"
            name="passwordRef"
            placeholder="Confirm Password"
            className={`${style.input} ${inputFeedback('passwordRef', formik)}`}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.passwordRef}
          />
          {inputFeedbackText('passwordRef', formik)}
        </div>
        <div className={style.group}>
          <Button type="submit" isDisabled={!(formik.dirty && formik.isValid)}>
            Sign Up
          </Button>
        </div>
        {feedbackCommon.msg.length !== 0 && (
          <p className={style[feedbackCommon.class]}>{feedbackCommon.msg}</p>
        )}
      </form>
    </>
  );
}

export default RegisterForm;
