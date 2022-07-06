import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useState } from 'react';
import { inputFeedback, inputFeedbackText } from '../../helpers/inputFeedback/inputFeedback';
import style from './Form.module.css';
import { postFetch } from '../../helpers/fetch';
import Button from '../UI/Button/Button';
import { useAuthCtx } from '../../store/authContext';
import { useHistory } from 'react-router-dom';

const endpoint = 'v1/content/skills';

const initialValues = {
  title: '',
  description: '',
};

function AddForm() {
  const history = useHistory();
  const { token } = useAuthCtx();
  if (!token) history.push('/login');
  const [feedbackCommon, setFeedbackCommon] = useState({ msg: '', class: '' });

  const formik = useFormik({
    initialValues,
    validationSchema: Yup.object({
      title: Yup.string()
        .min(2, 'min 2 characters')
        .max(255, 'max 255 characters')
        .required(),
      description: Yup.string().min(4, 'min 4 characters').required(),
    }),
    onSubmit: async (values) => {
      const result = await postFetch(endpoint, values, token);
      console.log('result: ', result);
      if (result.err) {
        setFeedbackCommon({ msg: result.err, class: 'danger' });
        return;
      }
      setFeedbackCommon({
        msg: 'New skill added successfully',
        class: 'success',
      });
      setTimeout(() => {
        history.push('/');
      }, 2000);
    },
  });

  return (
    <>
      <h2>Add new skill</h2>
      <form onSubmit={formik.handleSubmit} className={style.wrapper}>
        <div className={style.group}>
          <input
            type="text"
            name="title"
            placeholder="Title"
            className={`${style.input} ${inputFeedback('title', formik)}`}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.title}
          />
          {inputFeedbackText('title', formik)}
        </div>
        <div className={style.group}>
          <textarea
            type="text"
            rows="6"
            name="description"
            placeholder="Description"
            className={`${style.textarea} ${inputFeedback(
              'description',
              formik,
            )}`}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.description}
          />
          {inputFeedbackText('description', formik)}
        </div>
        <div className={style.group}>
          <Button isDisabled={!(formik.dirty && formik.isValid)}>Add</Button>
        </div>
        {feedbackCommon.msg.length !== 0 && (
          <p className={style[feedbackCommon.class]}>{feedbackCommon.msg}</p>
        )}
      </form>
    </>
  );
}

export default AddForm;
