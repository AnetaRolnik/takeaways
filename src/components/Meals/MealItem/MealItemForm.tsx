import classes from "./MealItemForm.module.css";

import Input from "../../UI/Input";

const MealItemForm: React.FC<{ id: string }> = (props) => {
  return (
    <form className={classes.form}>
      <Input
        type="number"
        input={{
          id: `amount_${props.id}`,
          min: "1",
          max: "5",
          defaultValue: "1",
        }}
      />
      <button className={classes["form__button"]} type="submit">
        Add
      </button>
    </form>
  );
};

export default MealItemForm;
