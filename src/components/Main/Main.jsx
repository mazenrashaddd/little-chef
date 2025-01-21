import "./Main.css";
import { useState } from "react";

import Ingredients from "../Ingredients/Ingredients";
import Recipe from "../Recipe/Recipe"

export default function Main() {
  const [ingredients, setIngredients] = useState([]);

  function addIngredient(formData) {
    const newIngredient = formData.get("ingredient");
    if (newIngredient) {
      setIngredients((prevIngredients) => [...prevIngredients, newIngredient]);
    }
  }

  const ingredientsElements = ingredients.map((ingredient) => {
    return <li>{ingredient}</li>;
  });

  return (
    <main className="mainSection">
      <form className="ingredientsForm" action={addIngredient}>
        <input
          className="ingredientsInput"
          type="text"
          name="ingredient"
          id="ingredient"
          placeholder="eg. chicken ribs"
        />
        <button>Add Ingredient</button>
      </form>

      <Ingredients ingredientsElements={ingredientsElements} />
      <Recipe 
      ingredientsElements = {ingredientsElements}
      />
    </main>
  );
}
