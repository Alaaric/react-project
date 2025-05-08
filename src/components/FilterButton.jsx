import { useState } from "react";

export default function FilterButton({ name, items, category, addTag, tags }) {
  const [isOpen, setIsOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };

  const filteredItems = items.filter((item) =>
    item.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const isTagged = (item) => {
    return tags.some((tag) => tag.name === item && tag.category === category);
  };

  return (
    <div className="selectTag">
      <button onClick={toggleOpen}>
        <div className="titleSelect">
          <p>{name}</p>
          <i className={`fas fa-chevron-${isOpen ? "up" : "down"}`}></i>
        </div>
      </button>
      {isOpen && (
        <>
          <input
            type="search"
            className="inputSelectTag"
            placeholder={`Rechercher dans les ${name.toLowerCase()}...`}
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <div className="filter-list">
            {filteredItems.map((item, index) => (
              <p
                key={index}
                onClick={() => addTag(category, item)}
                className={`filter-item ${isTagged(item) && category}`}
              >
                {item}
              </p>
            ))}
          </div>
        </>
      )}
    </div>
  );
}
