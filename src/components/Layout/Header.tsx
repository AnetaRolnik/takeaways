import classes from "./Header.module.css";

const Header = () => (
  <header className={classes.header}>
    <div className={classes["header__logo"]}>Takeaways</div>
    <button type="button">Order</button>
  </header>
);

export default Header;
