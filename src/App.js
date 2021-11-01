import React, { useState } from "react";
import MealList from "./MealList";

function App() {
  const [mealData, setMealData] = useState(null);
  const [calories, setCalories] = useState(2000);

  function getMealData() {
    {/*axios
      .get('https://api.spoonacular.com/recipes/716429/information?apiKey=618396b0abe143398becafd2108f3164&timeFrame=week&targetCalories${calories}')
      .then(resp => {
        setMealData(data);
        console.log(resp.data);
      });*/}
    fetch(
      `https://api.spoonacular.com/mealplanner/generate?timeFrame=day&targetCalories=${calories}`
    )
      .then((response) => response.json())
      .then((data) => {
        setMealData(data);
      })
      .catch(() => {
        console.log("error");
      });
  }

  function handleChange(e) {
    setCalories(e.target.value);
  }
  return (
    < div className="App" >
      <section className="controls">
        <input
          type="number"
          placeholder="Calories (e.g 2000)"
          onChange={handleChange} />
        <button onClick={getMealData}>Get Your Weekly Meal Plan</button>
        {mealData && <MealList mealData={mealData} />}
      </section>
    </div >

  );
};

export default App;
