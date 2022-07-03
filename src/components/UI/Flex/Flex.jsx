import style from './Flex.module.css';

function Flex({ children }) {
  return <div className={style.flex}>{children}</div>;
}

export default Flex;
