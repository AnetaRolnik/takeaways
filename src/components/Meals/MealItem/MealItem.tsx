import classes from "./MealItem.module.css";

import MealItemForm from "./MealItemForm";

const MealItem: React.FC<{
  id: string;
  name: string;
  description: string;
  price: number;
}> = (props) => {
  const price = `$${props.price.toFixed(2)}`;

  return (
    <li className={classes.meal}>
      <div>
        <h3 className={classes.meal__header}>{props.name}</h3>
        <div className={classes.meal__description}>{props.description}</div>
        <div className={classes.meal__price}>{price}</div>
      </div>
      <MealItemForm id={props.id} />
    </li>
  );
};

export default MealItem;
