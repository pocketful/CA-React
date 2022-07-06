import { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import CardList from '../components/CardList/CardList';
import { getFetch } from '../helpers/fetch';
import { useAuthCtx } from '../store/authContext';

const endpoint = 'v1/content/skills';
// const endpoint = './data/skills.json';

function HomePage() {
  const [skillsArr, setSkillsArr] = useState([]);
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
    }
  }

  useEffect(() => {
    getSkills();
  }, []);

  return (
    <>
      <h1>Skills</h1>
      <CardList data={skillsArr} />
    </>
  );
}

export default HomePage;
