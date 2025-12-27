import FilterButton from "./FilterButton"

function SortList({setSortOrder}) {
  return (
    <>
    <div className="filter-containerg dropdown-sort"  >
                  
                <ul>
                    <li><FilterButton
                  text="Price ↑"
                  onClick={() => setSortOrder("asc")}
                /></li>
               <li> <FilterButton
                  text="Price ↓"
                  onClick={() => setSortOrder("desc")}
                /></li>
               <li> <FilterButton
                  text="Most Relevent"
                  onClick={() => setSortOrder(null)}
                /></li>

             </ul>
              </div>
     
    </>
  )
}

export default SortList
