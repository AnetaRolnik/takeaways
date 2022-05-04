import React from "react";
import classes from "./Input.module.css";

type InputProps = {
  label?: string;
  type?: string;
  input: { id: string; min?: string; max?: string; defaultValue?: string };
  isValid?: boolean;
  errorMessage?: string;
};

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ label, type, input, isValid, errorMessage }, ref) => {
    return (
      <div
        className={`${classes["form-control"]} ${
          !isValid ? classes["form-control--invalid"] : ""
        }`}
      >
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
        {!isValid && (
          <p className={classes["form-control__error-text"]}>{errorMessage}</p>
        )}
      </div>
    );
  }
);

export default Input;
