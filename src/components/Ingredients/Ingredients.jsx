import "./Ingredients.css";

export default function Ingredients(props) {
  return (
    <>
      {props.ingredientsElements.length > 0 && (
        <main className="IngredientsSection">
          <h1>Ingredients On Hand:</h1>
          <ol>{props.ingredientsElements}</ol>
        </main>
      )}
    </>
  );
}
