import { useFormik } from 'formik';
import style from './Form.module.css';
import Button from '../UI/Button/Button';

const initialValues = {
  title: '',
  description: '',
};

function AddForm() {
  const formik = useFormik({
    initialValues,
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
            className={style.input}
            onChange={formik.handleChange}
            value={formik.values.title}
          />
        </div>
        <div className={style.group}>
          <textarea
            type="text"
            rows="6"
            name="description"
            placeholder="Description"
            className={style.textarea}
            onChange={formik.handleChange}
            value={formik.values.description}
          />
        </div>
        <div className={style.group}>
          <Button>Add</Button>
        </div>
      </form>
    </>
  );
}

export default AddForm;
