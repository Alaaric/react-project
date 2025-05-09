import { useMemo } from "react";

export default function useFilterLogic(items, tags, category, searchTerm, addTag) {
  const filteredItems = useMemo(
    () =>
      items.filter((item) =>
        item.toLowerCase().includes(searchTerm.toLowerCase())
      ),
    [items, searchTerm]
  );

  const isTagged = (item) =>
    tags.some((tag) => tag.name === item && tag.category === category);

  const handleTagClick = (item) => {
    if (!isTagged(item)) {
      addTag(category, item);
    }
  };

  return { filteredItems, isTagged, handleTagClick };
}