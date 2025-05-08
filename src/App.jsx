import { useRecipes } from "./hook/useRecipes";
import Header from "./components/Header";
import Filters from "./components/Filters";
import Tags from "./components/Tags";
import Cards from "./components/Cards";
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
      <Header searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      <main>
        <Filters
          filtersValues={filtersValues}
          tags={tags}
          addTag={addTag}
          filteredRecipes={filteredRecipes}
        />
        <Tags tags={tags} removeTag={removeTag} />
        <Cards recipes={filteredRecipes} />
      </main>
    </>
  );
}

export default App;
