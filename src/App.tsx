import { useState } from "react";

import classes from "./App.module.css";
import Header from "./components/Layout/Header";
import Hero from "./components/Layout/Hero";
import Meals from "./components/Meals/Meals";
import Cart from "./components/Cart/Cart";
import CartProvider from "./store/CartProvider";

const App = () => {
  const [cartIsShown, setCartIsShown] = useState(false);

  const showCartHandler = () => setCartIsShown(true);
  const hideCartHandler = () => setCartIsShown(false);

  return (
    <CartProvider>
      {cartIsShown && <Cart onHideCart={hideCartHandler} />}
      <Header onShowCart={showCartHandler} />
      <Hero />
      <main className={classes.container}>
        <Meals />
      </main>
    </CartProvider>
  );
};

export default App;
