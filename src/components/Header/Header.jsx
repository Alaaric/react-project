import { useRecipes } from "../../hooks/useRecipes";
import "../../css/App.css";

const Header = () => {
  const { searchTerm, setSearchTerm } = useRecipes();

  return (
    <header className="header">
      <div className="logo">
        <h1>LES PETITS PLATS</h1>
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
  );
};

export default Header;
