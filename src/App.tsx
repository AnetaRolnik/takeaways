import React, { useState, Suspense } from "react";

import classes from "./App.module.css";
import Header from "./components/Layout/Header";
import Hero from "./components/Layout/Hero";
import Meals from "./components/Meals/Meals";
import CartProvider from "./store/CartProvider";
import Loader from "./components/UI/Loader";

const Cart = React.lazy(() => import("./components/Cart/Cart"));

const App = () => {
  const [cartIsShown, setCartIsShown] = useState(false);

  const showCartHandler = () => setCartIsShown(true);
  const hideCartHandler = () => setCartIsShown(false);

  return (
    <CartProvider>
      <Suspense fallback={<Loader />}>
        {cartIsShown && <Cart onHideCart={hideCartHandler} />}
      </Suspense>
      <Header onShowCart={showCartHandler} />
      <Hero />
      <main className={classes.container}>
        <Meals />
      </main>
    </CartProvider>
  );
};

export default App;
