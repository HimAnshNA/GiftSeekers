import { useEffect,useRef, useState } from "react";
import ProductCard from "./ProductCard";
import FilterButton from "./FilterButton";
import { IoIosMan } from "react-icons/io";
// import ProductOverlayProduct from "./ProductOverlayProduct";
import "./Style.css";
import OverlayProduct from "./OverlayProduct";
import CategoryList from "./CategoryList";
import SortList from "./SortList";
import PriceFilter from "./PriceFilter";

const ProductList = () => {
  const [data, setData] = useState([]);
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("all");
  const [sortOrder, setSortOrder] = useState(null);
  const [isFocused, setIsFocused] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [showFilter, setShowFilter] = useState(false);
  const [showSort, setShowSort] = useState(false);
  const[showPriceFilter,setShowPriceFilter] = useState(false);
  const[minPrice,setMinPrice] = useState(0);
  const[maxPrice,setMaxPrice] = useState(9999999)


  const scrollRef = useRef(null);
useEffect(() => {
  const el = scrollRef.current;
  if (!el) return;

  const handleClose = () => {
    closeAll();
  };

  el.addEventListener("scroll", handleClose);
  el.addEventListener("touchstart", handleClose, { passive: true });

  return () => {
    el.removeEventListener("scroll", handleClose);
    el.removeEventListener("touchstart", handleClose);
  };
}, []);




  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((products) => setData(products));
  }, []);

  const filterToggle = function () {
    if (showFilter === true) {
      setShowFilter(false);
    } else {
      setShowFilter(true);
    }
  };
  
  
  const sortToggle = function () {
    if (showSort === true) {
      setShowSort(false);
    } else {
      setShowSort(true);
    }
  };
  
    const priceFilterToggle = function () {
    if (showSort === true) {
      setShowPriceFilter(false);
    } else {
      setShowPriceFilter(true);
    }
  };
  const closeAll = () => {
setShowFilter(false);
  setShowSort(false);
  setShowPriceFilter(false);
};

  const filteredProducts = data.filter((product) => {
    const matchCategory = category === "all" || product.category === category;

    const matchSearch = product.title
      .toLowerCase()
      .includes(search.toLowerCase());

    return matchCategory && matchSearch;
  });

  const sortedProducts = [...filteredProducts].sort((a, b) => {
    if (sortOrder === "asc") {
      return a.price - b.price;
    }
    if (sortOrder === "desc") {
      return b.price - a.price;
    }
    return 0;
  });

const allFiltered = showPriceFilter
  ? sortedProducts.filter((product) => {
      return (
        product.price >= minPrice &&
        product.price <= maxPrice
      );
    })
  : sortedProducts;


  return (
    <>
      <div className="app-container" onClick={closeAll} >
        <div className="header">
          <div className="logo">
            {/* <img src="../../public/images/logo6.png" alt="Logo" /> */}
            <img src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEi0xNOiqELE5EB04zg3lpXK9KqzpJUhanwpXpAfFdFDGuzRMXg3CweooQ_pwgQ_txenxdNNUQr8GKD0H3OZw15sGPxyQ-C2CJKLqXUeFjR_Fvj1WDnmDI3R9qMcLD4iql4lsgQ3yLBuA0DtkGKt7cFxTxp87gp9IRMjMDtWgusau-I8QuT4O_LuJGch-b7I/s3264/logo6.png" alt="Logo" />

           
          </div>
          <div className="cat-box">





          {  /*{showFilter ? (
              <div className="filter-container">
                <FilterButton text="All" onClick={() => setCategory("all")} />
                <FilterButton
                  text="Men"
                  onClick={() => setCategory("men's clothing")}
                />
                <FilterButton
                  text="Women"
                  onClick={() => setCategory("women's clothing")}
                />
                <FilterButton
                  text="Electronics"
                  onClick={() => setCategory("electronics")}
                />
                <FilterButton
                  text="Jewelery"
                  onClick={() => setCategory("jewelery")}
                />

                <FilterButton text="✕" onClick={filterToggle}></FilterButton>
              </div>





              <div><FilterButton
                  text={"Show Categories"}
                  onClick={filterToggle}
                ></FilterButton>
              <CategoryList setCategory={setCategory} filterToggle={filterToggle}/></div>
            ) : (
              <div className="filter-container">
                <FilterButton
                  text={"Show Categories"}
                  onClick={filterToggle}
                ></FilterButton>
              </div>
            )}*/}

<div onClick={(e) => e.stopPropagation()}>
  <FilterButton
    text="Price Filter"
    onClick={() => {
        setShowPriceFilter(prev => !prev);
  setShowFilter(false);
  setShowSort(false);
    }}
  />

  {showPriceFilter && (
    <PriceFilter
priceFilterToggle={priceFilterToggle} setMinPrice={setMinPrice} setMaxPrice={setMaxPrice}
    />
  )}
</div>



<div onClick={(e) => e.stopPropagation()}>
  <FilterButton
    text="Show Categories"
    onClick={() => {
      setShowFilter(prev => !prev);
      setShowSort(false);
      setShowPriceFilter(false);
    }}
  />

  {showFilter && (
    <CategoryList
      setCategory={setCategory}
      closeAll={closeAll}
    />
  )}
</div>



<div onClick={(e) => e.stopPropagation()}>
  <FilterButton
    text="Sort"
    onClick={() => {
      setShowSort(prev => !prev);
      setShowFilter(false);
      setShowPriceFilter(false);
    }}
  />

  {showSort && (
    <SortList
sortToggle={sortToggle} setSortOrder={setSortOrder}
    />
  )}
</div>



            {/* {showSort ? (
              <div className="filter-container">
                <FilterButton
                  text="Price ↑"
                  onClick={() => setSortOrder("asc")}
                />
                <FilterButton
                  text="Price ↓"
                  onClick={() => setSortOrder("desc")}
                />
                <FilterButton
                  text="Most Relevent"
                  onClick={() => setSortOrder(null)}
                />

                <FilterButton text="✕" onClick={sortToggle}></FilterButton>
              </div>
              <SortList sortToggle={sortToggle} setSortOrder={setSortOrder}/>
            ) : (
              <div className="filter-container">
                <FilterButton text={"Sort"} onClick={sortToggle}></FilterButton>
              </div>
            )} */}




                                 <input
              className="search-box "
              placeholder={
                isFocused
                  ? "Dynamic Suggestions from API..."
                  : "Search products..."
              }
              type="input"
              list="product-list"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              onFocus={() => setIsFocused(true)}
              onBlur={() => setIsFocused(false)}
            />

            <datalist id="product-list">
              {data.slice(0, 5).map((product) => (
                <option
                  className="suggestion"
                  key={product.id}
                  value={product.title}
                />
              ))}
            </datalist> 
          </div>
 
        </div>

        <div className="scroll-wrapper" ref={scrollRef}>
          <div className="product-grid">
            {allFiltered.map((product) => (
  <ProductCard
    key={product.id}
    product={product}
    onClick={setSelectedProduct}
  />
))}
          </div>
        </div>
      </div>
      {/* <ProductOverlayProduct
  product={selectedProduct}
  onClose={() => setSelectedProduct(null)}
/> */}

      <OverlayProduct
        product={selectedProduct}
        onClose={() => setSelectedProduct(null)}
      />
    </>
  );
};

export default ProductList;

// import { useEffect, useState } from "react";
// import ProductCard from "./ProductCard";
// import FilterButton from "./FilterButton";
// // import ProductOverlayProduct from "./ProductOverlayProduct";
// import "./Style.css"
// import OverlayProduct from "./OverlayProduct";

// const ProductList = () => {
//   const [data, setData] = useState([]);
//   const [search, setSearch] = useState("");
//   const [category, setCategory] = useState("all");
//   const [isFocused, setIsFocused] = useState(false);
//   const [selectedProduct, setSelectedProduct] = useState(null);

//   useEffect(() => {
//     fetch("https://fakestoreapi.com/products")
//       .then(res => res.json())
//       .then(products => setData(products));
//   }, []);

//   const filteredProducts = data.filter(product => {
//     const matchCategory =
//       category === "all" || product.category === category;

//     const matchSearch =
//       product.title.toLowerCase().includes(search.toLowerCase());

//     return matchCategory && matchSearch;
//   });

//   return (<>
//     <div className="app-container">
//       <h2>Products</h2>

// <div className="cat-box">
//       <div className="filter-container">
//         <FilterButton text="All" onClick={() => setCategory("all")} />
//         <FilterButton text="Men" onClick={() => setCategory("men's clothing")} />
//         <FilterButton text="Women" onClick={() => setCategory("women's clothing")} />
//         <FilterButton text="Electronics" onClick={() => setCategory("electronics")} />
//         <FilterButton text="Jewelery" onClick={() => setCategory("jewelery")} />
//       </div>

//       <input
//         className="search-box"
//           placeholder={
//     isFocused ? "Dynamic Suggestions from API..." : "Search products..."
//   }
//         type="input"
//         list="product-list"
//         value={search}
//         onChange={(e) => setSearch(e.target.value)}
//         onFocus={() => setIsFocused(true)}
//   onBlur={() => setIsFocused(false)}

//       />

//               <datalist  id="product-list">
//           {data.slice(0, 5).map(product => (
//             <option className="suggestion" key={product.id} value={product.title} />
//           ))}
//         </datalist>

// </div>
//      <div className="scroll-wrapper">
//   <div className="product-grid">
//     {filteredProducts.map(product => (
//       <ProductCard key={product.id} product={product}   onClick={setSelectedProduct}/>
//     ))}
//   </div>
// </div>

//     </div>
// {/* <ProductOverlayProduct
//   product={selectedProduct}
//   onClose={() => setSelectedProduct(null)}
// /> */}

// <OverlayProduct product={selectedProduct}
//   onClose={() => setSelectedProduct(null)}  />
// </>

//   );
// };

// export default ProductList;
