import { useContext } from "react";
import { RecipesContext } from "../context/RecipesContext";

export const useRecipes = () => {
    const context = useContext(RecipesContext);
    return context;
  };