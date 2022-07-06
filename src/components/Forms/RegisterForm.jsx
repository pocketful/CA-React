import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useState } from 'react';
import { inputFeedback, inputFeedbackText } from '../../helpers/inputFeedback/inputFeedback';
import { postFetch } from '../../helpers/fetch';
import Button from '../UI/Button/Button';
import style from './Form.module.css';

const endpoint = 'v1/auth/register';

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
    validationSchema: Yup.object({
      email: Yup.string().email('invalid email address').required(),
      password: Yup.string().min(4, 'min 4 characters').max(20).required(),
      passwordRef: Yup.string()
        .required('please retype your password')
        .oneOf([Yup.ref('password'), null], 'passwords must match'),
    }),
    onSubmit: async (values) => {
      console.log('submitted values: ', values);
      const result = await postFetch(endpoint, {
        email: values.email,
        password: values.password,
      });
      console.log('result: ', result);
      if (result.err) {
        console.log('result.err:', result.err);
        return;
      }
      console.log('ok');
    },
  });

  console.log('formik.errors ===', formik.errors);

  return (
    <div>
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
          <Button isDisabled={!(formik.dirty && formik.isValid)}>
            Sign In
          </Button>
        </div>
      </form>
    </div>
  );
}

export default RegisterForm;
