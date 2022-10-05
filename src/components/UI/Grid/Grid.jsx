import style from './Grid.module.css';
import PropTypes from 'prop-types';

function Grid({ children }) {
  return <div className={style.grid}>{children}</div>;
}

Grid.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Grid;
