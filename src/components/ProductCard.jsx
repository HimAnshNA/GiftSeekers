import { useState } from "react";
import StarRating from "./StarRating";
const ProductCard = ({ product, onClick }) => {


  return (
    <div className="product-card block"  onClick={() => onClick(product)}>
      <div className="img-wrapper">
        <img src={product.image} alt={product.title} />
      </div>

      <div className="card-body">
        <h3 className="product-title">{product.title.slice(0, 22)+".."}</h3>

        <p className="product-desc">
          {product.description.slice(0, 50)}...
        </p>

        <div className="card-footer">
          <span className="price">$ {product.price}</span>


          <StarRating rating={product.rating.rate} />
        </div>
      </div>
    </div>
  );
};

export default ProductCard;










// const ProductCard = ({ product }) => {
//   return (
//     <div className="product-card">
//       <img src={product.image} alt={product.title} />

//       <h3>{product.title}</h3>

//       <p className="price">₹ {product.price}</p>

//       <p className="rating">
//         ⭐ {product.rating.rate} ({product.rating.count})
//       </p>

//       <p className="desc">
//         {product.description.slice(0, 80)}...
//       </p>
//     </div>
//   );
// };

// export default ProductCard;
