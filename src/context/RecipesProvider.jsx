import { useState, useEffect } from "react";
import recipesData from "../data/recipes.json";
import { RecipesContext } from "./RecipesContext";

export const RecipesProvider = ({ children }) => {
  const [filteredRecipes, setFilteredRecipes] = useState(recipesData);
  const [filtersValues, setFiltersValues] = useState({
    ingredients: [],
    appliances: [],
    ustensils: [],
  });
  const [tags, setTags] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

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
      let updatedRecipes = recipesData;

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
        return [...prevTags, { category, name }];
      }
      return prevTags;
    });
  };

  const removeTag = (tagToRemove) => {
    setTags((prevTags) => prevTags.filter((tag) => tag !== tagToRemove));
  };

  return (
    <RecipesContext.Provider
      value={{
        filteredRecipes,
        filtersValues,
        tags,
        searchTerm,
        setSearchTerm,
        addTag,
        removeTag,
      }}
    >
      {children}
    </RecipesContext.Provider>
  );
};
