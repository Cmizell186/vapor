import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux"
import { get_one_review } from "../../store/reviews"
import './reviewstyles.css';


const ReviewSummary = ({review}) => {

  return (
    <div className="review-summary-container">
      <div className="review-summary-content">
        <div className="review-summary-title">You reviewed this game</div>
        <div className="review-link-container">
          <a className="review-link-bttn" href={`/reviews/${review?.id}`}>
            <span>
              View & edit your review
            </span>
           </a>
        </div>
            <div className="review_sum_visib_text">
            <p> Your review is currently marked as publicly visible.
                You can edit this review, change your rating, and change the visibility setting if
                you wish.
            <a href={`/reviews/${review?.id}`}>View your review</a>
            </p>
            </div>
        <div className="review-success-container">
          <div className="review-success-description">
            <div className="thumb">
              <img src={review?.is_recommended
                 ? "https://store.cloudflare.steamstatic.com/public/shared/images/userreviews/icon_thumbsUp.png"
                 : "https://community.cloudflare.steamstatic.com/public/shared/images/userreviews/icon_thumbsDown.png?v=1"
                }
                width="44" height="44" alt=""
              />
            </div>
          </div>
            <div className="review_summary_content">
                {review?.content}
              </div>
        </div>
      </div>
    </div>
  )
}

export default ReviewSummary;
