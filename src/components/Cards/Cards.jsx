import Card from "./Card";
import { useRecipes } from "../../hooks/useRecipes";

const Cards = () => {
  const { filteredRecipes } = useRecipes();
  return (
    <section className="cards">
      {filteredRecipes.length === 0 ? (
        <p>Aucune recette trouvée.</p>
      ) : (
        filteredRecipes.map((recipe) => (
          <Card
            key={recipe.id}
            image={recipe.image}
            name={recipe.name}
            recipe={recipe.description}
            ingredients={recipe.ingredients}
            time={recipe.time}
          />
        ))
      )}
    </section>
  );
};

export default Cards;
