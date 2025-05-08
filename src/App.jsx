import { MATCH_TABLE } from "./constants/constants";
import { useRecipes } from "./hook/useRecipes";
import Card from "./components/Card";
import FilterButton from "./components/FilterButton";
import "./css/App.css";

function App() {
  const {
    filteredRecipes,
    filtersValues,
    tags,
    searchTerm,
    setSearchTerm,
    addTag,
    removeTag,
  } = useRecipes();

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
            CHERCHEZ PARMI PLUS DE 1500 RECETTES DU QUOTIDIEN, SIMPLES ET
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
        <section className="tags">
          {tags.map((tag) => (
            <div key={tag.name} className={`tag ${tag.category}`}>
              <span>{tag.name}</span>
              <i
                className="fas fa-times remove-tag"
                onClick={() => removeTag(tag)}
              ></i>
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
