import classes from "./Input.module.css";

const Input: React.FC<{
  label?: string;
  type?: string;
  input: { id: string; min: string; max: string; defaultValue: string };
}> = (props) => {
  return (
    <div className={classes["form-control"]}>
      {props.label && (
        <label
          className={classes["form-control__label"]}
          htmlFor={props.input.id}
        >
          {props.label}
        </label>
      )}
      <input
        className={classes["form-control__input"]}
        type={props.type || "text"}
        {...props.input}
      />
    </div>
  );
};

export default Input;
