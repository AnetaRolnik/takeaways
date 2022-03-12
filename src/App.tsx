import { Fragment, useState } from "react";

import Header from "./components/Layout/Header";
import Hero from "./components/Layout/Hero";
import Meals from "./components/Meals/Meals";
import Cart from "./components/Cart/Cart";

const App = () => {
  const [cartIsShown, setCartIsShown] = useState(false);

  const showCartHandler = () => setCartIsShown(true);
  const hideCartHandler = () => setCartIsShown(false);

  return (
    <Fragment>
      {cartIsShown && <Cart onHideCart={hideCartHandler} />}
      <Header onShowCart={showCartHandler} />
      <Hero />
      <main>
        <Meals />
      </main>
    </Fragment>
  );
};

export default App;
