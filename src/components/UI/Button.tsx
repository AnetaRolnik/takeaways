import classes from "./Button.module.css";

const Button: React.FC<{
  type?: "submit" | "reset" | "button";
  variant: "primary" | "secondary";
  clickAction?: () => void;
}> = (props) => {
  const btnClasses = `
    ${classes.btn} ${
    props.variant === "primary"
      ? classes["btn--primary"]
      : classes["btn--secondary"]
  } `;

  return (
    <button
      className={btnClasses}
      onClick={props.clickAction}
      type={props.type || "button"}
    >
      {props.children}
    </button>
  );
};

export default Button;
