import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { create_review } from "../../store/reviews"

const ReviewGame = ({gameId}) => {
  const sessionUser = useSelector((state) => state.session.user);
  const [is_recommended, setIs_Recommended] = useState(null)
  const [content, setContent] = useState("")
  const [errors, setErrors] = useState([])
  const [hasSubmitted, setHasSubmitted] = useState(false)
  const history = useHistory()
  const dispatch = useDispatch();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setHasSubmitted(true);

    let ourErrors = [];
    if(is_recommended === null) ourErrors.push("must have recommended selected")
    if(!content) ourErrors.push("must have content")
    if(ourErrors.length) return setErrors(ourErrors)

    const review = {
      is_recommended,
      content,
      user_id: sessionUser.id,
      game_id: gameId
    };
    let newReview = await dispatch(create_review(review))
    setIs_Recommended(null)
    setContent("")
    setHasSubmitted(false);
    if (newReview) {
      history.push('/')
    }
  }

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
			<h3>
				Do you recommend this game?
			</h3>
			<button className='recommend_yes'
				type='button'
				value={is_recommended}
				onClick={(e) => setIs_Recommended(true)}
			>
				Yes
			</button>
			<button className='recommend_no'
			type='button'
			value={is_recommended}
			onClick={(e) => (setIs_Recommended(false))}
			>No
			</button>
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
			Post Review
			</button>
        </form>
      </div>
    </>
  )
}

export default ReviewGame;
