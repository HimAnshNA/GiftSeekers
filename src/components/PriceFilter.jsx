// import { useState } from "react";

// function PriceFilter({ setMinPrice, setMaxPrice }) {
//   const [min, setMin] = useState(0);
//   const [max, setMax] = useState(1000);

//   const handleMinChange = (e) => {
//     const value = Number(e.target.value);
//     setMin(value);
//     setMinPrice(value);
//   };

//   const handleMaxChange = (e) => {
//     const value = Number(e.target.value);
//     setMax(value);
//     setMaxPrice(value);
//   };

//   return (
//     <div
//       className="filter-containerg dropdown-sort"
//       onClick={(e) => e.stopPropagation()}
//     >
//        <h4>Filter by Price</h4>
//       <div className="container">

//          <d className="range-slider">

// <input type="number" className="min-price" value={min}  min="1" max="1000"/>
// <input type="number" className="max-price" value={max}  min="1" max="1000"/>
// </d
//     <div className="range">

// <input type="range" className="min-price" value={min}  min="1" max="1000" onChange={handleMinChange}/>
// <input type="range" className="max-price" value={max}  min="1" max="1000" onChange={handleMaxChange}/>

//     </div>
// </div>
//         {/* <input
//           type="range"
//           min="0"
//           max="1000"
//           step="10"
//           value={min}
//           onChange={handleMinChange}
//           className="rangeInput"
//         />
//     <input
//           type="text"
//           readOnly
//           value={`$${min} - $${max}`}
//         />
//         <input
//           type="range"
//           min="0"
//           max="1000"
//           step="10"
//           value={max}
//           onChange={handleMaxChange}
//           className="rangeInput"
//         /> */}
//       {/* </div> */}
//     </div>
//   );
// }

// export default PriceFilter;








import { useState } from "react";

function PriceFilter({ setMinPrice, setMaxPrice }) {
  const [min, setMin] = useState(0);
  const [max, setMax] = useState(1000);

  const handleMinChange = (e) => {
    const value = Number(e.target.value);
    if (value > max) return;
    setMin(value);
    setMinPrice(value);
  };

  const handleMaxChange = (e) => {
    const value = Number(e.target.value);
    if (value < min) return;
    setMax(value);
    setMaxPrice(value);
  };

  return (
    <div
      className="filter-containerg dropdown-price"
      onClick={(e) => e.stopPropagation()}
    >
      <div className="slider-box">
        <h3>Filter by Price</h3>

    <div >

        
        <div className="priceContainer">

          <span>${min}</span>
<div className="barContainer"><h6>Min Price </h6>
        <input
          type="range"
          min="0"
          max="1000"
          step="1"
          value={min}
          onChange={handleMinChange}
          className="rangeInput"
        />
        </div>
        </div>
</div>


  <div className="priceContainer">

          <span>${max}</span>
<div className="barContainer"><h6>Max Price </h6>
        <input
          type="range"
          min="0"
          max="1000"
          step="1"
          value={max}
          onChange={handleMaxChange}
          className="rangeInput"
        />
        </div>
        </div>

      </div>
    </div>
  );
}

export default PriceFilter;
        
