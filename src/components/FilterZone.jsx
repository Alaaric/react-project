export default function FilterZone() {
  return (
    <section className="filters">
      <div className="selectTag">
        <div className="titleSelect">
          <p>Ingredients</p>
          <button className="fas fa-chevron-down"></button>
        </div>
      </div>
      <div className="selectTag">
        <div className="titleSelect">
          <p>Appareils</p>
          <button className="fas fa-chevron-down"></button>
        </div>
      </div>
      <div className="selectTag">
        <div className="titleSelect">
          <p>Ustensiles</p>
          <button className="fas fa-chevron-down"></button>
        </div>
      </div>
    </section>
  );
}
