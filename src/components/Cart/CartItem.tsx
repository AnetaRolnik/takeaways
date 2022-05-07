import classes from "./CartItem.module.css";
import Button from "../UI/Button";

const CartItem: React.FC<{
  name: string;
  price: number;
  amount: number;
  onRemove: () => void;
  onAdd: () => void;
}> = (props) => {
  const price = `$${props.price.toFixed(2)}`;

  return (
    <li className={classes["cart-item"]}>
      <div>
        <h3>{props.name}</h3>
        <div className={classes.summary}>
          <span className={classes.price}>{price}</span>
          <span className={classes.amount}>x {props.amount}</span>
        </div>
      </div>
      <div className={classes.actions}>
        <Button clickAction={props.onRemove} variant="secondary">
          -
        </Button>
        <Button clickAction={props.onAdd} variant="secondary">
          +
        </Button>
      </div>
    </li>
  );
};

export default CartItem;
