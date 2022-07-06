import style from './Flex.module.css';

function Flex({ children, jc }) {
  return <div className={style[jc]}>{children}</div>;
}

export default Flex;
