import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useParams } from "react-router-dom";
import { update } from "../../store/reviews";

const EditReview = () => {
  const sessionUser = useSelector((state) => state.session.user);
  const { id } = useParams()
  const games = useSelector((state) => state.session.user);
  const game = games[id]
  const history = useHistory()
  const dispatch = useDispatch();
  const [is_recommended, setIs_Recommended] = useState(game.reviews.id?.is_recommended)
  const [content, setContent] = useState(game.reviews.id?.content)
  const [errors, setErrors] = useState([])
  const [hasSubmitted, setHasSubmitted] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault();
    setHasSubmitted(true);

    const updatedReview = {
      id: game.reviews.id,
      is_recommended,
      content,
      userId: sessionUser.id,
    };
    let newReview = await dispatch(update(updatedReview));
    setIs_Recommended(false);
    setContent("");

    if (newReview) {
      history.push("/reviews/:id")
    }
  };

  return (
    <>
      <div className="review-form-container">
        <h2>Write a review</h2>
        <p>Please describe what you liked or disliked about this game
           and whether you recommend it to others.
          Please remember to be polite and follow the Rules and Guidelines.
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
          <label htmlFor="is_recommended">
            Do you recommend this game?
          </label>
          <button className='recommend_yes'
            value={true}
            onChange={(e) => setIs_Recommended(true)}
          />
          <button className='recommend_no'
          value={false}
          onChange={(e) => setIs_Recommended(false)}
          />
        </div>
        <div className="content-div">
          <label htmlFor='content'>
          Content:
          </label>
          <textarea
            className='create_textbox'
            type='text'
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
  )
}

export default EditReview;
