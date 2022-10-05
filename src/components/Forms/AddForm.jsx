import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useState } from 'react';
import style from './Form.module.css';
import { postFetch } from '../../helpers/fetch';
import Button from '../UI/Button/Button';
import { useAuthCtx } from '../../store/authContext';
import { useHistory } from 'react-router-dom';
import Input from '../Input/Input';

const endpoint = 'v1/content/skills';

const initialValues = {
  title: '',
  description: '',
};

function AddForm({ onSuccessAdd }) {
  const history = useHistory();
  const { token } = useAuthCtx();
  if (!token) history.replace('/login');
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
      // console.log('result: ', result);
      if (result.err) {
        setFeedbackCommon({ msg: result.err, class: 'danger' });
        return;
      }
      setFeedbackCommon({
        msg: 'New skill added successfully',
        class: 'success',
      });
      setTimeout(() => {
        onSuccessAdd();
      }, 2000);
    },
  });

  return (
    <>
      <h2>Add new skill</h2>
      <form onSubmit={formik.handleSubmit} className={style.wrapper}>
        <Input type="text" name="title" placeholder="Title" formik={formik} />
        <Input
          type="textarea"
          name="description"
          placeholder="Description"
          formik={formik}
        />
        <div className={style.group}>
          <Button type="submit" isDisabled={!(formik.dirty && formik.isValid)}>
            Add
          </Button>
        </div>
        {feedbackCommon.msg.length !== 0 && (
          <p className={style[feedbackCommon.class]}>{feedbackCommon.msg}</p>
        )}
      </form>
    </>
  );
}

export default AddForm;
