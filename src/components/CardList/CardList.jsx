import Card from '../Card/Card';
import Grid from '../UI/Grid/Grid';
import PropTypes from 'prop-types';

function CardList({ data }) {
  return (
    <Grid>
      {data.map((dataObj) => (
        <Card key={dataObj.id} {...dataObj} />
      ))}
    </Grid>
  );
}

CardList.propTypes = {
  data: PropTypes.array.isRequired,
};

export default CardList;
