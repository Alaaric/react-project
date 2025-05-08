export default function FilterDropdown({
  searchTerm,
  setSearchTerm,
  filteredItems,
  isTagged,
  handleTagClick,
  category,
}) {
  return (
    <>
      <input
        type="search"
        className="inputSelectTag"
        placeholder={`Rechercher dans les ${category.toLowerCase()}...`}
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <div className="filter-list">
        {filteredItems.map((item, index) => (
          <p
            key={index}
            onClick={() => handleTagClick(item)}
            className={`filter-item ${isTagged(item) && category}`}
          >
            {item}
          </p>
        ))}
      </div>
    </>
  );
}
