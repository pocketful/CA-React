import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useState } from 'react';
import {
  inputFeedback,
  inputFeedbackText,
} from '../../helpers/inputFeedback/inputFeedback';
import style from './Form.module.css';
import Button from '../UI/Button/Button';

const initialValues = {
  title: '',
  description: '',
};

function AddForm() {
  const formik = useFormik({
    initialValues,
    validationSchema: Yup.object({
      title: Yup.string().min(2, 'min 2 characters').max(255).required(),
      description: Yup.string().min(4, 'min 4 characters').max(255).required(),
    }),
    onSubmit: async (values) => {
      console.log('submitted values: ', values);
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
          <Button>Add</Button>
        </div>
      </form>
    </>
  );
}

export default AddForm;
