const FilterButton = ({ text, onClick }) => {
  return (
    <button className="filter-btn" onClick={onClick}>
      {text}
    </button>
  );
};

export default FilterButton;
