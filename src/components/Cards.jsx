import Card from "./Card";
import recettes from "../data/recettes.json";

export default function Cards() {
  return (
    <section className="cards">
      {recettes.map((recette) => (
        <Card
          key={recette.id}
          image={recette.image}
          name={recette.name}
          recipeTitle={`Pour ${recette.servings} personnes`}
          recipe={recette.description}
          ingredients={recette.ingredients}
          time={recette.time}
        />
      ))}
    </section>
  );
}
