import classes from "./Loader.module.css";

const Loader = () => {
  return (
    <div className={classes["pan-loader"]}>
      <div className={classes.loader}></div>
      <div className={classes["pan-container"]}>
        <div className={classes.pan}></div>
        <div className={classes.handle}></div>
      </div>
    </div>
  );
};

export default Loader;
