import { useRef, useState } from "react";

import classes from "./MealItemForm.module.css";
import Input from "../../UI/Input";
import Button from "../../UI/Button";

const MealItemForm: React.FC<{
  id: string;
  onAddToCart: (amount: number) => void;
}> = (props) => {
  const amountInputRef = useRef<HTMLInputElement>(null);
  const [amountIsValid, setAmountIsValid] = useState(true);

  const submitHandler = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (amountInputRef.current) {
      const enteredAmount = amountInputRef.current.value;
      const enteredAmountNumber: number = +enteredAmount;

      if (
        enteredAmount?.trim().length === 0 ||
        enteredAmountNumber < 1 ||
        enteredAmountNumber > 5
      ) {
        setAmountIsValid(false);
        return;
      }

      props.onAddToCart(enteredAmountNumber);
    }
  };

  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <Input
        ref={amountInputRef}
        type="number"
        input={{
          id: `amount_${props.id}`,
          min: "1",
          max: "5",
          defaultValue: "1",
        }}
        isValid={true}
      />
      <Button type="submit" variant="primary">
        Add
      </Button>
      {!amountIsValid && <p>Please enter a valid amount (1-5)</p>}
    </form>
  );
};

export default MealItemForm;
