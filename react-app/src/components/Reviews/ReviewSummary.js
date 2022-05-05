import React from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux"
import { get_one_review } from "../..store/reviews"
import datetime from "datetime"

const date = datetime.now()

const ReviewSummary = () => {
  const { reviewId } = useParams();
  const review = useSelector((state) => state.reviews[reviewId]);


  return (
    <div className="review-summary-container">
      <div className="review-summary-content">
        <h3 className="review-summary-title">{`You revewed this game on ${(date)}`}</h3>
        <div className="review-summary">
          <img
            className="recommend-thumb"
            src={review.is_recommended ?}
      </div>
    </div>
  )
}

export default ReviewSummary;
