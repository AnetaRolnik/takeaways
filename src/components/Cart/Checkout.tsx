import { useRef, useState } from "react";

import classes from "./Checkout.module.css";
import Input from "../UI/Input";

const Checkout: React.FC<{
  onCancel: () => void;
  onSubmit: (data: {
    name: string;
    street: string;
    postalCode: string;
    city: string;
  }) => void;
}> = (props) => {
  const [formInputsValidity, setFormInputsValidity] = useState({
    name: true,
    street: true,
    postalCode: true,
    city: true,
  });

  const nameInputRef = useRef<HTMLInputElement>(null);
  const streetInputRef = useRef<HTMLInputElement>(null);
  const postalCodeInputRef = useRef<HTMLInputElement>(null);
  const cityInputRef = useRef<HTMLInputElement>(null);

  const isEmpty = (value: string) => value.trim() === "";
  const isFiveChars = (value: string) => value.trim().length === 5;

  const confirmHandler = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const enteredName = nameInputRef.current!.value;
    const enteredStreet = streetInputRef.current!.value;
    const enteredPostalCode = postalCodeInputRef.current!.value;
    const enteredCity = cityInputRef.current!.value;

    const nameIsValid = !isEmpty(enteredName);
    const streetIsValid = !isEmpty(enteredStreet);
    const postalCodeIsValid = isFiveChars(enteredPostalCode);
    const cityIsValid = !isEmpty(enteredCity);

    setFormInputsValidity({
      name: nameIsValid,
      street: streetIsValid,
      postalCode: postalCodeIsValid,
      city: cityIsValid,
    });

    const formIsValid =
      nameIsValid && streetIsValid && postalCodeIsValid && cityIsValid;

    if (!formIsValid) {
      return;
    }

    props.onSubmit({
      name: enteredName,
      street: enteredStreet,
      postalCode: enteredPostalCode,
      city: enteredCity,
    });
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
        isValid={formInputsValidity.name}
        errorMessage="Please enter a valid name."
      />
      <Input
        label="Street"
        type="text"
        ref={streetInputRef}
        input={{
          id: "street",
        }}
        isValid={formInputsValidity.street}
        errorMessage="Please enter a valid street address."
      />
      <Input
        label="Postal Code"
        type="text"
        ref={postalCodeInputRef}
        input={{
          id: "postal",
        }}
        isValid={formInputsValidity.postalCode}
        errorMessage="Please enter a valid postal code (5 characters long)."
      />
      <Input
        label="City"
        type="text"
        ref={cityInputRef}
        input={{
          id: "city",
        }}
        isValid={formInputsValidity.city}
        errorMessage="Please enter a valid city."
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
