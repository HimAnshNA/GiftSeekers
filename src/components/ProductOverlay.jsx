import StarRating from "./StarRating";
const ProductOverlay = ({ product, onClose }) => {
  if (!product) return null;

  return (
    <div className="overlay-backdrop" onClick={onClose}>
      <div
        className="overlay-card"
        onClick={(e) => e.stopPropagation()}
      >
        <button className="close-btn" onClick={onClose}>✕</button>

        <div className="overlay-content">
          <img src={product.image} alt={product.title} />

          <div className="overlay-info">
            <h2>{product.title}</h2>

            <p className="overlay-category">{product.category}</p>

            <p className="overlay-desc">{product.description}</p>

            <div className="overlay-meta">
              <span className="overlay-price">₹ {product.price}</span>
              <span className="overlay-rating">
              
                 <StarRating rating={product.rating.rate} />({product.rating.count})
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductOverlay;
