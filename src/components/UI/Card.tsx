import classes from "./Card.module.css";

const Card: React.FC<{ className: string }> = (props) => {
  const styles = `${classes.card} ${props.className}`;

  return <div className={styles}>{props.children}</div>;
};

export default Card;
