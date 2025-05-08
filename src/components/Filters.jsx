import FilterButton from "./FilterButton";
import { MATCH_TABLE } from "../constants/constants";

const Filters = ({ filtersValues, tags, addTag, filteredRecipes }) => {
  return (
    <section className="filters">
      {Object.entries(filtersValues).map(([key, values]) => (
        <FilterButton
          key={key}
          name={MATCH_TABLE[key]}
          items={values}
          category={key}
          addTag={addTag}
          tags={tags}
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
