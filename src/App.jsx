import { useState, useEffect } from "react";
import recipes from "./data/recipes.json";
import Card from "./components/Card";
import FilterButton from "./components/FilterButton";
import "./css/App.css";

function App() {
  const [searchTerm, setSearchTerm] = useState("");
  const translationMap = {
    ingredients: "Ingrédients",
    appliances: "Appareils",
    ustensils: "Ustensiles",
  };
  const [filteredRecipes, setFilteredRecipes] = useState(recipes);
  const [filtersValues, setFiltersValues] = useState({
    ingredients: [],
    appliances: [],
    ustensils: [],
  });
  const [tags, setTags] = useState([]);

  useEffect(() => {
    const updateFiltersValues = () => {
      const ingredientsSet = new Set();
      const appliancesSet = new Set();
      const ustensilsSet = new Set();

      filteredRecipes.forEach((recipe) => {
        recipe.ingredients.forEach((ingredient) =>
          ingredientsSet.add(ingredient.ingredient.toLowerCase())
        );

        appliancesSet.add(recipe.appliance.toLowerCase());

        recipe.ustensils.forEach((ustensil) =>
          ustensilsSet.add(ustensil.toLowerCase())
        );
      });

      setFiltersValues({
        ingredients: Array.from(ingredientsSet),
        appliances: Array.from(appliancesSet),
        ustensils: Array.from(ustensilsSet),
      });
    };

    updateFiltersValues();
  }, [filteredRecipes]);

  useEffect(() => {
    const updateFilteredRecipes = () => {
      let updatedRecipes = recipes;

      if (searchTerm) {
        updatedRecipes = updatedRecipes.filter(
          (recipe) =>
            recipe.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
            recipe.description
              .toLowerCase()
              .includes(searchTerm.toLowerCase()) ||
            recipe.ingredients.some((ingredient) =>
              ingredient.ingredient
                .toLowerCase()
                .includes(searchTerm.toLowerCase())
            )
        );
      }

      tags.forEach(({ category, name }) => {
        if (category === "ingredients") {
          updatedRecipes = updatedRecipes.filter((recipe) =>
            recipe.ingredients.some(
              (ingredient) =>
                ingredient.ingredient.toLowerCase() === name.toLowerCase()
            )
          );
        } else if (category === "appliances") {
          updatedRecipes = updatedRecipes.filter(
            (recipe) => recipe.appliance.toLowerCase() === name.toLowerCase()
          );
        } else if (category === "ustensils") {
          updatedRecipes = updatedRecipes.filter((recipe) =>
            recipe.ustensils.some(
              (ustensil) => ustensil.toLowerCase() === name.toLowerCase()
            )
          );
        }
      });

      setFilteredRecipes(updatedRecipes);
    };

    updateFilteredRecipes();
  }, [searchTerm, tags]);

  const addTag = (category, name) => {
    setTags((prevTags) => {
      if (!prevTags.some((t) => t.name === name && t.category === category)) {
        return [...prevTags, { category, name: name }];
      }
      return prevTags;
    });
  };

  return (
    <>
      <header className="header">
        <div className="logo">
          <h1>LES PETITS PLATS </h1>
          <div className="circle-icon">
            <div className="round-icon"></div>
          </div>
        </div>

        <div className="content">
          <h2>
            CHERCHEZ PARMI PLUS DE 1500 RECETTES DU QUOTIDIEN,SIMPLES ET
            DÉLICIEUSES
          </h2>
          <div className="searchBar">
            <input
              type="search"
              placeholder="Rechercher une recette, un ingrédient, ..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <i className="fas fa-magnifying-glass icone"></i>
          </div>
        </div>
      </header>
      <main>
        <section className="filters">
          {Object.entries(filtersValues).map(([key, values]) => (
            <FilterButton
              key={key}
              name={translationMap[key]}
              items={values}
              category={key}
              addTag={addTag}
            />
          ))}
        </section>
        <section className="tags">
          {tags.map((tag) => (
            <div
              key={tag.name}
              className={`tag ${tag.category}`}
              onClick={() => setTags(tags.filter((t) => t !== tag))}
            >
              {tag.name}
            </div>
          ))}
        </section>
        <section className="cards">
          {filteredRecipes.map((recipe) => (
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
      </main>
    </>
  );
}

export default App;
