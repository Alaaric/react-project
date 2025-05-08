import { useContext } from "react";
import { RecipesContext } from "../context/RecipesContext";

export const useRecipes = () => {
    const context = useContext(RecipesContext);
    if (!context) {
      throw new Error("useRecipes must be used within a RecipesProvider");
    }
    return context;
  };