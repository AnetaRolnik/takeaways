import Modal from "../UI/Modal";

import classes from "./Cart.module.css";

const Cart: React.FC<{ onHideCart: () => void }> = (props) => {
  const cartItems = (
    <ul className={classes["cart-items"]}>
      {[{ id: "c1", name: "Sushi", amount: 2, price: 22.99 }].map((item) => (
        <li>{item.name}</li>
      ))}
    </ul>
  );

  return (
    <Modal onClose={props.onHideCart}>
      {cartItems}
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>35.62</span>
      </div>
      <div className={classes.actions}>
        <button
          className={`${classes.button} ${classes["button--secondary"]}`}
          onClick={props.onHideCart}
        >
          Close
        </button>
        <button className={`${classes.button} ${classes["button--primary"]}`}>
          Order
        </button>
      </div>
    </Modal>
  );
};

export default Cart;
