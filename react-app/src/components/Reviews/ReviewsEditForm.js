import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useParams } from "react-router-dom";
import { update_review } from "../../store/reviews";

const EditReview = ({review, hideModal, gameId}) => {
  const sessionUser = useSelector((state) => state.session.user);
  const { id } = useParams();
  // const { reviewId } = useParams();
  const games = useSelector((state) => state.session.user);
  const game = games[id];
  // const review = useSelector((state) => state.reviews[reviewId]);
  const history = useHistory();
  const dispatch = useDispatch();
  const [is_recommended, setIs_Recommended] = useState(
    review?.is_recommended
  );
  const [content, setContent] = useState(review?.content);
  const [errors, setErrors] = useState([]);
  const [hasSubmitted, setHasSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setHasSubmitted(true);
    const updatedReview = {
      id: review.id,
      is_recommended,
      content,
      game_id: gameId,
      userId: sessionUser.id,
    };
    await dispatch(update_review(updatedReview));
    setIs_Recommended(false);
    setContent("");
    setHasSubmitted(false);
    // window.location.reload();
    hideModal();
  };

  return (
    <>
      <div className="review-form-container">
        <h2>Write a review</h2>
        <p>
          Please describe what you liked or disliked about this game and whether
          you recommend it to others. Please remember to be polite and follow
          the Rules and Guidelines.
        </p>
        <form onSubmit={handleSubmit} className="create-reviews-container">
          {hasSubmitted && (
            <div className="error">
              {errors.map((error, index) => (
                <div key={index}>{error}</div>
              ))}
            </div>
          )}
          <div className="is_recommended-div">
            <h3>Do you recommend this game?</h3>
            <button
              className="recommend_yes"
              type="button"
              value={is_recommended}
              onClick={(e) => setIs_Recommended(true)}
            >
              Yes
            </button>
            <button
              className="recommend_no"
              type="button"
              value={is_recommended}
              onClick={(e) => setIs_Recommended(false)}
            >
              No
            </button>
          </div>
          <div className="content-div">
            <label htmlFor="content">Content:</label>
            <textarea
              className="create_textbox"
              type="text"
              value={content}
              onChange={(e) => setContent(e.target.value)}
            />
          </div>
          <button className={"button btn-submit-review"} type="submit">
            Update Review
          </button>
        </form>
      </div>
    </>
  );
};

export default EditReview;
