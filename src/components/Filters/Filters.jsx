import FilterButton from "./FilterButton";
import { MATCH_TABLE } from "../../constants/constants";
import { useRecipes } from "../../hooks/useRecipes";

const Filters = () => {
  const { filteredRecipes, filtersValues } = useRecipes();

  return (
    <section className="filters">
      {Object.entries(filtersValues).map(([key, values]) => (
        <FilterButton
          key={key}
          name={MATCH_TABLE[key]}
          items={values}
          category={key}
        />
      ))}
      <div className="recipe-count">
        {filteredRecipes.length}{" "}
        {filteredRecipes.length > 1 ? "recettes" : "recette"}
      </div>
    </section>
  );
};

export default Filters;
