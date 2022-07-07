import { useHistory } from 'react-router-dom';
import AddForm from '../components/Forms/AddForm';

function AddPage() {
  const history = useHistory();
  return (
    <>
      <h1>Add</h1>
      <AddForm onSuccessAdd={() => history.push('/')}/>
    </>
  );
}

export default AddPage;
