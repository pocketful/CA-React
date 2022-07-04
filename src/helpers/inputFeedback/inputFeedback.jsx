import style from './inputFeedback.module.css';

export function inputFeedback(field, formik) {
  if (formik.touched[field] && formik.errors[field]) return style.inputErr;
  if (formik.touched[field] && !formik.errors[field]) return style.inputSucc;
  return '';
  // return formik.touched[field] && formik.errors[field]
  //   ? style.inputErr
  //   : formik.touched[field] && !formik.errors[field]
  //   ? style.inputSucc
  //   : '';
}

export function inputFeedbackText(field, formik) {
  if (formik.touched[field] && formik.errors[field]) {
    return <p className={style.inputErrMsg}>{formik.errors[field]}</p>;
  }
  if (formik.touched[field] && !formik.errors[field]) {
    return <p className={style.inputSuccMsg}>Looks good!</p>;
  }
  // return formik.touched[field] && formik.errors[field] ? (
  //   <p className={style.inputErrMsg}>{formik.errors[field]}</p>
  // ) : (
  //   formik.touched[field] && !formik.errors[field] && (
  //     <p className={style.inputSuccMsg}>Looks good!</p>
  //   )
  // );
}
