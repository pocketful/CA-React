import { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import CardList from '../components/CardList/CardList';
import EmptyArr from '../components/EmptyArr/EmptyArr';
import ServerError from '../components/ServerError/ServerError';
import Loader from '../components/UI/Loader/Loader';
import { getFetch } from '../helpers/fetch';
import { useAuthCtx } from '../store/authContext';

const endpoint = 'v1/content/skills';
// const endpoint = './data/skills.json';

function HomePage() {
  const [skillsArr, setSkillsArr] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isServerOn, setIsServerOn] = useState(true);
  console.log('skillsArr:', skillsArr);
  console.log('isServerOn:', isServerOn);

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
      setIsServerOn(false);
      // history.replace('*');
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
      {isLoading ? (
        <Loader />
      ) : !isServerOn ? (
        <ServerError />
      ) : skillsArr.length === 0 ? (
        <EmptyArr name="skills" link="/add" />
      ) : (
        <CardList data={skillsArr} />
      )}
      {/* {isLoading && <Loader />}
      {!isLoading && !isServerOn && <ServerError />}
      {!isLoading && isServerOn && skillsArr.length === 0 && <EmptyArr name='skills' link='/add' />}
      {!isLoading && skillsArr.length > 0 && <CardList data={skillsArr} />} */}
    </>
  );
}

export default HomePage;
