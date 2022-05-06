import classes from "./Alert.module.css";
import Card from "./Card";

const Alert: React.FC<{ type: string }> = (props) => {
  const alertClasses = `${classes.alert} ${classes[props.type]}`;
  return <div className={alertClasses}>{props.children}</div>;
};

export default Alert;
