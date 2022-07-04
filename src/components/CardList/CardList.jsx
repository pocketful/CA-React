import Card from '../Card/Card';
import Grid from '../UI/Grid/Grid';

function CardList({ data }) {
  return (
    <Grid>
      {data.map((dataObj) => (
        <Card key={dataObj.id} {...dataObj} />
      ))}
    </Grid>
  );
}

export default CardList;
