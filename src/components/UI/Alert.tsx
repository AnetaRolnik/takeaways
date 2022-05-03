import classes from "./Alert.module.css";
import Card from "./Card";

const Alert: React.FC<{ type: string }> = (props) => {
  const alertClasses = `${classes.alert} ${classes[props.type]}`;
  return (
    <Card className={alertClasses}>
      <p>{props.children}</p>
    </Card>
  );
};

export default Alert;
