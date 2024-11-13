import React from "react";
import star_img from "../assets/star.png";
import half_star from "../assets/rating.png";
import white_star from "../assets/white-star.png";

const StarReview = ({ stars, reviews }) => {
  // Ensure stars is a number between 0 and 5
  const ratingStar = Array.from({ length: 5 }, (elem, index) => {
    const starValue = index + 1;
    let starSrc;

    if (stars >= starValue) {
      starSrc = star_img; // Full star
    } else if (stars >= starValue - 0.5) {
      starSrc = half_star; // Half star
    } else {
      starSrc = white_star; // Empty star
    }

    return <img key={index} src={starSrc} alt={`Star rating ${starValue}`} />;
  });

  return (
    <div className="star-icons">
      <div className="rating-star">{ratingStar}</div>
      <p>{reviews} reviews</p>
    </div>
  );
};

export default StarReview;
