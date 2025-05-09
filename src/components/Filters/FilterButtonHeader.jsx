export default function FilterButtonHeader({ name, isOpen, toggleOpen }) {
  return (
    <button onClick={toggleOpen}>
      <div className="titleSelect">
        <p>{name}</p>
        <i className={`fas fa-chevron-${isOpen ? "up" : "down"}`}></i>
      </div>
    </button>
  );
}
