import React from "react";
import classes from "./Input.module.css";

type InputProps = {
  label?: string;
  type?: string;
  input: { id: string; min: string; max: string; defaultValue: string };
};

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ label, type, input }, ref) => {
    return (
      <div className={classes["form-control"]}>
        {label && (
          <label className={classes["form-control__label"]} htmlFor={input.id}>
            {label}
          </label>
        )}
        <input
          ref={ref}
          className={classes["form-control__input"]}
          type={type || "text"}
          {...input}
        />
      </div>
    );
  }
);

export default Input;
