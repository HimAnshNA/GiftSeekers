import React from "react";
import "./Overlay.css";
const Overlay = ({ product, onClose }) => {
  if (!product) return null;

  return (
    <>
      <div className="overlay-backdrop-div" onClick={onClose}>
        <div className="overlay-div" onClick={(e) => e.stopPropagation()}>
              <button className="close-btn" onClick={onClose}>✕</button>
          <div className="content-div-left">
            

            <div className="img-wrap">
                
              <img src={product.image} alt={product.title} />
            </div>

            <h1>$ {product.price}</h1>
          </div>

          <div className="content-div-right">
            
            <div className="title-part">
                
              <div className="title-price">
                {" "}
                <h2>{product.title}</h2>
              </div>
              
             <span><div><BoxRating rating={product.rating.rate} /><br /><p>Rated {product.rating.rate} by {product.rating.count} buyers</p></div>
             
             
                 <h1>$ {product.price}</h1></span>
            </div>

            <div className="desc-part">
             
               <p>{product.description.slice(0,400)+"..."}</p>
            </div>
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
