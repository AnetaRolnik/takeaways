import classes from "./MealItem.module.css";

const MealItem: React.FC<{
  name: string;
  description: string;
  price: number;
}> = (props) => {
  const price = `$${props.price.toFixed(2)}`;

  return (
    <li className={classes.meal}>
      <h3 className={classes.meal__header}>{props.name}</h3>
      <div className={classes.meal__description}>{props.description}</div>
      <div className={classes.meal__price}>{price}</div>
    </li>
  );
};

export default MealItem;
