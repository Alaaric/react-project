import Header from "./components/Header/Header";
import Filters from "./components/Filters/Filters";
import Tags from "./components/Tags/Tags";
import Cards from "./components/Cards/Cards";
import "./css/App.css";

function App() {
  return (
    <>
      <Header />
      <main>
        <Filters />
        <Tags />
        <Cards />
      </main>
    </>
  );
}

export default App;
