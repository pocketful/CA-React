import style from './AddForm.module.css';
import Button from '../UI/Button/Button';

function AddForm() {
  return (
    <div className={style.wrapper}>
      <h2>Add new skill</h2>
      <form>
        <div className={style.group}>
          <input
            type="text"
            name="title"
            placeholder="Title"
            className={style.input}
          />
        </div>
        <div className={style.group}>
          <textarea
            type="text"
            rows="6"
            name="description"
            placeholder="Description"
            className={`${style.input} ${style.textarea}`}
          />
        </div>
        <div className={style.group}>
          <Button>Add</Button>
        </div>
      </form>
    </div>
  );
}

export default AddForm;
