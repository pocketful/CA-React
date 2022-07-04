import { useEffect, useState } from 'react';
import CardList from '../components/CardList/CardList';

// const baseUrl = process.env.REACT_APP_BASE_URL;
// const endpoint = 'v1/content/skills';
const baseUrl = './data/skills.json';

function HomePage() {
  const [skillsArr, setSkillsArr] = useState([]);
  console.log(skillsArr);
  
  async function getSkills() {
    try {
      // const resp = await fetch(`${baseUrl}/${endpoint}`);
      const resp = await fetch(baseUrl);
      const data = await resp.json();
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
