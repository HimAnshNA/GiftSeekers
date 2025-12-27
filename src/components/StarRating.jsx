import "./Style.css"
const StarRating = ({ rating }) => {


    
  const percentage = (rating / 5) * 100;

  return (
    <abbr title={rating} className="rating-abbr">
    <div className="star-rating">
      <div
        className="star-rating-filled"
        style={{ width: `${percentage}%` }}
      />
    </div>
        </abbr>
  );
};

export default StarRating;

