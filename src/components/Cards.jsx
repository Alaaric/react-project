import Card from "./Card";

const Cards = ({ recipes }) => {
  return (
    <section className="cards">
      {recipes.map((recipe) => (
        <Card
          key={recipe.id}
          image={recipe.image}
          name={recipe.name}
          recipe={recipe.description}
          ingredients={recipe.ingredients}
          time={recipe.time}
        />
      ))}
    </section>
  );
};

export default Cards;
