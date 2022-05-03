import { useState, useEffect } from "react";

import classes from "./AvailableMeals.module.css";

import MealItem from "./MealItem/MealItem";
import Card from "../UI/Card";
import Loader from "../UI/Loader";

type meal = {
  id: string;
  name: string;
  description: string;
  price: number;
};

const AvailableMeals = () => {
  const [meals, setMeals] = useState<meal[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchMeals = async () => {
      const response = await fetch(
        "https://takeaways-1d79e-default-rtdb.firebaseio.com/meals.json"
      );
      const responseData = await response.json();
      const loadedMeals: meal[] = [];

      for (const key in responseData) {
        loadedMeals.push({
          id: key,
          name: responseData[key].name,
          description: responseData[key].description,
          price: responseData[key].price,
        });
      }

      setMeals(loadedMeals);
      setIsLoading(false);
    };

    fetchMeals();
  }, []);

  const mealsList = meals.map((meal: meal) => (
    <MealItem
      key={meal.id}
      id={meal.id}
      name={meal.name}
      description={meal.description}
      price={meal.price}
    />
  ));

  if (isLoading) {
    return <Loader />;
  } else {
    return (
      <Card className={classes.meals}>
        {isLoading && <p>Loading...</p>}
        <ul className={classes["meals__list"]}>{mealsList}</ul>
      </Card>
    );
  }
};

export default AvailableMeals;
