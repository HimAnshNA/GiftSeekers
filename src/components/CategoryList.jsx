import FilterButton from "./FilterButton";

function CategoryList({ filterToggle, setCategory }) {
  return (
    <>
      <div className="filter-containerg dropdown-cat"  >

        <ul>
            <li> <FilterButton text="All" onClick={() => setCategory("all")} /></li>
        <li><FilterButton
          text="Men"
          onClick={() => setCategory("men's clothing")}
        /></li>
  <li><FilterButton
          text="Women"
          onClick={() => setCategory("women's clothing")}
        /></li>
          <li> <FilterButton text="Jewelery" onClick={() => setCategory("jewelery")} /></li>
        <li> <FilterButton
          text="Electronics"
          onClick={() => setCategory("electronics")}
        /></li>

             
        </ul>

        {/* <FilterButton text="All" onClick={() => setCategory("all")} /> */}
      
     
   

        {/* <FilterButton text="✕" onClick={filterToggle}></FilterButton> */}
      </div>
    </>
  );
}

export default CategoryList;
