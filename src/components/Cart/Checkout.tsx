import { useRef } from "react";

import classes from "./Checkout.module.css";
import Input from "../UI/Input";

const Checkout: React.FC<{ onCancel: () => void }> = (props) => {
  const nameInputRef = useRef<HTMLInputElement>(null);
  const streetInputRef = useRef<HTMLInputElement>(null);
  const postalCodeInputRfe = useRef<HTMLInputElement>(null);
  const cityInputRef = useRef<HTMLInputElement>(null);

  const confirmHandler = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const enteredName = nameInputRef?.current?.value;
    const enteredStreet = streetInputRef?.current?.value;
    const enteredPostalCode = postalCodeInputRfe?.current?.value;
    const enteredCity = cityInputRef?.current?.value;

    console.log(enteredName, enteredStreet, enteredPostalCode, enteredCity);
  };

  return (
    <form className={classes.form} onSubmit={confirmHandler}>
      <Input
        label="Name"
        type="text"
        ref={nameInputRef}
        input={{
          id: "name",
        }}
      />
      <Input
        label="Street"
        type="text"
        ref={streetInputRef}
        input={{
          id: "street",
        }}
      />
      <Input
        label="Postal Code"
        type="text"
        ref={postalCodeInputRfe}
        input={{
          id: "postal",
        }}
      />
      <Input
        label="City"
        type="text"
        ref={cityInputRef}
        input={{
          id: "city",
        }}
      />
      <div className={classes.actions}>
        <button
          type="button"
          onClick={props.onCancel}
          className={`${classes.button} ${classes["button--secondary"]}`}
        >
          Cancel
        </button>
        <button className={`${classes.button} ${classes["button--primary"]}`}>
          Confirm
        </button>
      </div>
    </form>
  );
};

export default Checkout;
