import { Fragment } from "react";

import Header from "./components/Layout/Header";
import Hero from "./components/Layout/Hero";
import Meals from "./components/Meals/Meals";

const App = () => {
  return (
    <Fragment>
      <Header />
      <Hero />
      <main>
        <Meals />
      </main>
    </Fragment>
  );
};

export default App;
