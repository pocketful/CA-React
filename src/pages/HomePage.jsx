import { useEffect, useState } from 'react';
import CardList from '../components/CardList/CardList';
import { getFetch } from '../helpers/fetch';

// const endpoint = 'v1/content/skills'; //TODO
const endpoint = './data/skills.json';

function HomePage() {
  const [skillsArr, setSkillsArr] = useState([]);
  console.log(skillsArr);

  async function getSkills() {
    try {
      const data = await getFetch(endpoint);
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
