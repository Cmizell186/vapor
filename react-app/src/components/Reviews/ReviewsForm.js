import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { create_review } from "../../store/reviews"
import { Modal } from '../../context/Modal'
import './reviewstyles.css'

const ReviewGame = ({ gameId }) => {
  const sessionUser = useSelector((state) => state.session.user);
  const currentGame = useSelector((state) => state.games[gameId])
  const [is_recommended, setIs_Recommended] = useState(null)
  const [content, setContent] = useState("")
  const [errors, setErrors] = useState([])
  const [hasSubmitted, setHasSubmitted] = useState(false)
  const [showModal, setShowModal] = useState(false)
  const history = useHistory()
  const dispatch = useDispatch();
  const [style_rec_yes, setStyle_Rec_Yes] = useState("recommend_yes");
  const [style_rec_no, setStyle_Rec_No] = useState("recommend_no")
  const handleSubmit = async (e) => {
    e.preventDefault();
    setHasSubmitted(true);

    let ourErrors = [];
    if (!content) ourErrors.push("Please provide what you liked or disliked about this game and whether you recommend it to others.")
    if (is_recommended === null) ourErrors.push("Please provide either recommended or not recommended.")
    if (ourErrors.length) {
      setShowModal(true)
      return setErrors(ourErrors)
    }

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
      history.push(`/`)
    }
  }


  // {hasSubmitted && (
  //   <div className="error">
  //     {errors.map((error, index) => (
  //       <div key={index}>{error}</div>
  //     ))}
  //     </div>
  // )}
  // const changeStyle = () => {
  //   console.log("you just clicked");
  //   setStyle_Rec_Yes("recommend_clicked");
  // };
  return (
    <>
      {hasSubmitted && showModal && (
        <Modal onClose={() => setShowModal(false)}>
          <div className="modal-content-text">
            <h2>WRITE A REVIEW FOR {currentGame.title.toUpperCase()}</h2>
            <div className="error-modal">
              {errors.map((error, index) => (
                <div key={index}>{error}</div>
              ))}
            </div>
            <div className="modal-content-bttn-ok">
                <span onClick={e => setShowModal(false)}>OK</span>
            </div>
          </div>

        </Modal>
      )}
      <div className="review-form-container">
        <h4>WRITE A REVIEW FOR {currentGame?.title.toUpperCase()}</h4>
        <p>Please describe what you liked or disliked about this game
          and whether you recommend it to others.
          <br/>
          Please remember to be polite and follow the
          <a href="/">Rules and Guidelines.</a>
        </p>
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
          </div>
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
                <i className="ico18 thumb_up"></i>
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
                <i className="ico18 thumb_down"></i>
                No
              </span>

            </button>
          <button className="button btn-submit-review" type="submit">
            <span>
            Post Review
            </span>
          </button>
          </div>
          </div>
        </form>
      </div>
    </>
  )
}

export default ReviewGame;
