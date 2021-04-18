import React, { useEffect, useState } from "react";
import ReviewCart from "./ReviewCart/ReviewCart";

const Review = () => {
  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    fetch("https://hidden-basin-82739.herokuapp.com/review")
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, []);
  return (
    <div className="">
      <h1 style={{ color: "tomato" }} className="text-center">
        User Reviews
      </h1>
      <div className="row mt-4">
        {reviews.map((review) => (
          <ReviewCart review={review}></ReviewCart>
        ))}
      </div>
    </div>
  );
};

export default Review;
