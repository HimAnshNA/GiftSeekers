import StarRating from "./StarRating";
import "./OverlayProduct.css";
const Overlay = ({ product, onClose }) => {
  if (!product) return null;

  return (
    <>
      <div className="overlay-backdrop-div" onClick={onClose}>
        <div className="overlay-div" onClick={(e) => e.stopPropagation()}>
          <button className="close-btn" onClick={onClose}>
            ✕
          </button>
          <div className="content-div-left">
            <div className="img-wrap">
              <img src={product.image} alt={product.title} />
            </div>
          </div>

          <div className="content-div-right">
            <div className="title">
              <div className="top-text">
                <h2>{product.title.slice(0, 110) + "..."}</h2>

                <h2>$ {product.price}</h2>
              </div>
              <div className="right-rating">
                <StarRating rating={product.rating.rate} />
                <h4>{product.rating.rate}</h4>
                <small>  •  {product.rating.count} reviews </small>
              </div>
              <div className="description">
                <p>{product.description.slice(0, 270) + "..."}</p>
              </div>

  
            </div>
                        <div className="cart-btn">
                <button>Add to Cart</button>
              </div>

            {/*             
            <div className="title-part">
                
              <div className="title-price">
                {" "}
                <h2>{product.title}</h2>
              </div>
              
          <StarRating rating={product.rating.rate} />{product.rating.rate}
             <span><div><BoxRating rating={product.rating.rate} /><br /><p>Rated {product.rating.rate} by {product.rating.count} buyers</p></div>
             
             
                 <h1>$ {product.price}</h1></span>
            </div>

            <div className="desc-part">
                 <div>
                  uper
                 </div>
                 <div className="desc-bg">
                     <p>{product.description.slice(0,400)+"..."}</p>
                 </div>
            </div> */}
          </div>
        </div>
      </div>
    </>
  );
};

const BoxRating = ({ rating }) => {
  const filled = Math.floor(rating);
  const boxes = [];

  for (let i = 1; i <= 5; i++) {
    boxes.push(
      <div
        key={i}
        className={`rating-box ${i <= filled ? "filled" : "rest"}`}
      />
    );
  }

  return <div className="rating-container">{boxes}</div>;
};

export default Overlay;
