import { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import CardList from '../components/CardList/CardList';
import EmptyArr from '../components/EmptyArr/EmptyArr';
import Loader from '../components/UI/Loader/Loader';
import { getFetch } from '../helpers/fetch';
import { useAuthCtx } from '../store/authContext';

const endpoint = 'v1/content/skills';
// const endpoint = './data/skills.json';

function HomePage() {
  const [skillsArr, setSkillsArr] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  console.log('skillsArr:', skillsArr);

  const history = useHistory();
  const { token } = useAuthCtx();
  if (!token) history.replace('/login');

  async function getSkills() {
    try {
      const data = await getFetch(endpoint, token);
      console.log('data:', data);
      setSkillsArr(data);
    } catch (err) {
      console.log('error in getSkills: ', err);
    } finally {
      setIsLoading(false);
    }
  }

  useEffect(() => {
    if (token) getSkills();
  }, []);

  return (
    <>
      <h1>Skills</h1>
      {isLoading && <Loader />}
      {!isLoading && skillsArr.length === 0 && <EmptyArr name='skills' link='/add' />}
      {skillsArr.length > 0 && <CardList data={skillsArr} />}
    </>
  );
}

export default HomePage;
