import { useFormik } from 'formik';
import { useState } from 'react';
import * as Yup from 'yup';
import { postFetch } from '../../helpers/fetch';
import Button from '../UI/Button/Button';
import style from './LoginForm.module.css';

const endpoint = 'v1/auth/login';

const initialValues = {
  email: '',
  password: '',
};

function LoginForm() {
  const [feedbackCommon, setFeedbackCommon] = useState({ msg: '', class: '' });

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
            className={`${style.input} 
            ${formik.touched.email && formik.errors.email ? style.inputErr : ''}
            ${
              formik.touched.email && !formik.errors.email
                ? style.inputSucc
                : ''
            }
            `}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.email}
          />
          {formik.touched.email && formik.errors.email && (
            <p className={style.inputErrMsg}>{formik.errors.email}</p>
          )}
          {formik.touched.email && !formik.errors.email && (
            <p className={style.inputSuccMsg}>Looks good</p>
          )}
        </div>

        <div className={style.group}>
          <input
            type="password"
            name="password"
            placeholder="Password"
            className={`${style.input} 
            ${
              formik.touched.password && formik.errors.password
                ? style.inputErr
                : ''
            }
            ${
              formik.touched.password && !formik.errors.password
                ? style.inputSucc
                : ''
            }
            `}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.password}
          />
          {formik.touched.password && formik.errors.password && (
            <p className={style.inputErrMsg}>{formik.errors.password}</p>
          )}
          {formik.touched.password && !formik.errors.password && (
            <p className={style.inputSuccMsg}>Looks good</p>
          )}
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
