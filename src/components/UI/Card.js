import classes from './Card.module.css';

/**
 * @author
 * @function Card
 **/

const Card = (props) => {
  return <div className={`${classes.card} ${props.className}`}>{props.children}</div>;
};

export default Card;
