import { inputFeedback, inputFeedbackText } from '../../helpers/inputFeedback/inputFeedback';
import style from './Input.module.css';

function Input({ type = 'text', name, placeholder, formik }) {
  return (
    <div className={style.group}>
    <input
      type={type}
      name={name}
      placeholder={placeholder}
      className={`${style.input} ${inputFeedback(name, formik)}`}
      onChange={formik.handleChange}
      onBlur={formik.handleBlur}
      value={formik.values[name]}
    />
    {inputFeedbackText(name, formik)}
    </div>
  );
}

export default Input;
