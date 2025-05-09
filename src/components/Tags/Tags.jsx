import { useRecipes } from "../../hooks/useRecipes";

const Tags = () => {
  const { tags, removeTag } = useRecipes();

  return (
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
  );
};

export default Tags;
