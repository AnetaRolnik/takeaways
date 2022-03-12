import { Fragment } from "react";

import Header from "./components/Layout/Header";
import Hero from "./components/Layout/Hero";
import Meals from "./components/Meals/Meals";
import Cart from "./components/Cart/Cart";

const App = () => {
  return (
    <Fragment>
      <Cart />
      <Header />
      <Hero />
      <main>
        <Meals />
      </main>
    </Fragment>
  );
};

export default App;
