import { Fragment, useContext, useState } from "react";

import classes from "./Cart.module.css";
import Modal from "../UI/Modal";
import CartContext from "../../store/cart-context";
import CartItem from "./CartItem";
import Checkout from "./Checkout";
import Alert from "../UI/Alert";
import Loader from "../UI/Loader";
import Button from "../UI/Button";

const Cart: React.FC<{ onHideCart: () => void }> = (props) => {
  const [isCheckout, setIsCheckout] = useState(false);
  const [httpError, setHttpError] = useState(null);
  const [isSendingForm, setIsSendingForm] = useState(false);
  const [didSubmit, setDidSubmit] = useState(false);
  const cartCtx = useContext(CartContext);

  const hasItems = cartCtx.items.length > 0;

  const cartItemRemoveHandler = (id: string) => {
    cartCtx.removeItem(id);
  };

  const cartItemAddHandler = (item: {
    id: string;
    name: string;
    amount: number;
    price: number;
  }) => {
    if (item.amount === 5) {
      return;
    }
    cartCtx.addItem({ ...item, amount: 1 });
  };

  const cartItems = (
    <ul className={classes["cart-items"]}>
      {cartCtx.items.map((item) => (
        <CartItem
          key={item.id}
          name={item.name}
          price={item.price}
          amount={item.amount}
          onAdd={cartItemAddHandler.bind(null, item)}
          onRemove={cartItemRemoveHandler.bind(null, item.id)}
        />
      ))}
    </ul>
  );

  const orderHandler = () => {
    setIsCheckout(true);
  };

  const submitOrderHandler = async (userData: {
    name: string;
    street: string;
    postalCode: string;
    city: string;
  }) => {
    setIsSendingForm(true);

    try {
      const response = await fetch(
        "https://takeaways-1d79e-default-rtdb.firebaseio.com/orders.json",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ user: userData, order: cartCtx.items }),
        }
      );
      setIsSendingForm(false);
      setDidSubmit(true);
      cartCtx.clearCart();
    } catch (error: any) {
      setIsSendingForm(false);
      setHttpError(error.message);
    }
  };

  const modalActions = (
    <div className={classes.actions}>
      <Button variant="secondary" clickAction={props.onHideCart}>
        Close
      </Button>
      {hasItems && (
        <Button variant="primary" clickAction={orderHandler}>
          Order
        </Button>
      )}
    </div>
  );

  const modalContent = (
    <Fragment>
      {cartItems}
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>{cartCtx.totalAmount.toFixed(2)}</span>
      </div>
      {isCheckout && (
        <Checkout onCancel={props.onHideCart} onSubmit={submitOrderHandler} />
      )}
      {httpError && <Alert type="danger">{httpError}</Alert>}
      {!isCheckout && modalActions}
    </Fragment>
  );

  const didSubmitModalContent = (
    <Fragment>
      <Alert type="success"> Successfully sent the order!</Alert>
      <div className={classes.actions}>
        <Button variant="primary" clickAction={props.onHideCart}>
          Close
        </Button>
      </div>
    </Fragment>
  );

  return (
    <Modal onClose={props.onHideCart}>
      {!isSendingForm && !didSubmit && modalContent}
      {isSendingForm && <Loader />}
      {didSubmit && didSubmitModalContent}
    </Modal>
  );
};

export default Cart;
