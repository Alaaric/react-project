import { useState } from "react";
import FilterButtonHeader from "./FilterButtonHeader";
import FilterDropdown from "./FilterDropdown";
import useFilterLogic from "../hooks/useFilterLogic";

export default function FilterButton({ name, items, category, addTag, tags }) {
  const [isOpen, setIsOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  const toggleOpen = () => setIsOpen((prev) => !prev);

  const { filteredItems, isTagged, handleTagClick } = useFilterLogic(
    items,
    tags,
    category,
    searchTerm,
    addTag
  );

  return (
    <div className="selectTag">
      <FilterButtonHeader name={name} isOpen={isOpen} toggleOpen={toggleOpen} />
      {isOpen && (
        <FilterDropdown
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
          filteredItems={filteredItems}
          isTagged={isTagged}
          handleTagClick={handleTagClick}
          category={category}
        />
      )}
    </div>
  );
}
