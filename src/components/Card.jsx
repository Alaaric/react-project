import "../css/Card.css";

const Card = ({ image, name, recipeTitle, recipe, ingredients, time }) => {
  return (
    <article className="card">
      <img src={`./images/${image}`} alt={recipeTitle} className="card-image" />
      <div className="time">
        <p>{time}min</p>
      </div>
      <div className="card-content">
        <h3 className="card-name">{name}</h3>
        <h4 className="card-recipe-title">RECETTE</h4>
        <p className="card-recipe">{recipe}</p>
        <h4>INGRÉDIENTS :</h4>
        <div className="card-ingredients">
          {ingredients.map((ingredient, index) => (
            <div key={index} className="ingredient">
              <p>{ingredient.ingredient}</p>
              <p>
                {ingredient.quantity} {ingredient.unit && ingredient.unit}
              </p>{" "}
            </div>
          ))}
        </div>
      </div>
    </article>
  );
};

export default Card;
