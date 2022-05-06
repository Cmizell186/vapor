import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { update_review } from "../../store/reviews";
import './editstyles.css'

const EditReview = ({review, gameId}) => {
  const sessionUser = useSelector((state) => state.session.user);
  const currentGame = useSelector((state) => state.games[gameId])
  const { id } = useParams();
  const games = useSelector((state) => state.session.user);
  const game = games[id];
  const dispatch = useDispatch();
  const [is_recommended, setIs_Recommended] = useState(
    review?.is_recommended
  );
  const [content, setContent] = useState(review?.content);
  const [errors, setErrors] = useState([]);
  const [hasSubmitted, setHasSubmitted] = useState(false);
  const [style_rec_yes, setStyle_Rec_Yes] = useState("recommend_yes");
  const [style_rec_no, setStyle_Rec_No] = useState("recommend_no")

  let ourErrors = [];
  if (!content) ourErrors.push("Please provide what you liked or disliked about this game and whether you recommend it to others.")
  if (is_recommended === null) ourErrors.push("Please provide either recommended or not recommended.")
  if (ourErrors.length) {
    return setErrors(ourErrors)
  }

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
  };

  return (
    <>
      <div className="review-form-container">
        <form onSubmit={handleSubmit} className="review-content-container">
          <div className="content-div">
            <label htmlFor='content'>
            </label>
            <textarea
              className='create_textbox'
              type='text'
              value={content}
              onChange={(e) => setContent(e.target.value)}
            />
          <div className="review_controls_body">
          <div className="review_controls_container">
            <span>visibility</span>
          </div>
          <div className="is_recommended-div">Do you recommend this game?</div>
          <div className='vote_up_down_container'>
            <button className={style_rec_yes}
              type='button'
              value={is_recommended}
              onClick={(e) => {
                setIs_Recommended(true)
                setStyle_Rec_Yes("recommend_clicked")
                setStyle_Rec_No("recommend_no")
              }}
            >
              <span>
              <i className="fa-solid fa-thumbs-up"></i>
                Yes
              </span>
            </button>
            <button className={style_rec_no}
              type='button'
              value={is_recommended}
              onClick={(e) => {
                setIs_Recommended(false)
                setStyle_Rec_No("recommend_clicked")
                setStyle_Rec_Yes("recommend_yes")
              }}
            >
              <span>
              <i className="fa-solid fa-thumbs-down"></i>
                No
              </span>
            </button>
          <button className="button btn-submit-review" type="submit">
            <span>
            Update Review
            </span>
          </button>
          </div>
          </div>
          </div>
        </form>
      </div>
    </>
  )
}

export default EditReview;
