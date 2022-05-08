import React, { useEffect, useState } from "react";
import { get_one_review } from "../../store/reviews";
import { useDispatch, useSelector } from "react-redux";
import { useParams, useHistory } from "react-router-dom";
import { delete_review } from "../../store/reviews";
import { Modal } from "../../context/Modal";
import { update_review } from "../../store/reviews";
import './editstyles.css'

import "./index.css";

const ReviewDetails = ({ loaded }) => {
  const dispatch = useDispatch();
  const history = useHistory();
  const { gameId } = useParams();
  const { reviewId } = useParams();
  const review = useSelector((state) => state.reviews[reviewId]);
  const sessionUser = useSelector((state) => state.session.user);
  const [showModal, setShowModal] = useState(false);
  const [errorModal, setErrorModal] = useState(false);
  const [formDiv, setFormDiv] = useState(false);
  const [is_recommended, setIs_Recommended] = useState(review?.is_recommended);
  const [content, setContent] = useState(review?.content);
  const [errors, setErrors] = useState([]);
  const [hasSubmitted, setHasSubmitted] = useState(false);


  useEffect(() => {
    dispatch(get_one_review(reviewId)); //warning here- useEffect has a missing dependency: 'reviewId'. Either include it or remove the dependency array

  }, [dispatch]);

  const handleSubmit = async (e) => {
    console.log("inside of handle Submit")
    e.preventDefault();
    setHasSubmitted(true);

    let ourErrors = [];
    if (!content) ourErrors.push("Please provide what you liked or disliked about this game and whether you recommend it to others.")
    if (is_recommended === null) ourErrors.push("Please provide either recommended or not recommended.")
    if (ourErrors.length) {
      setErrorModal(true)
      return setErrors(ourErrors)
    }

    const updatedReview = {
      id: review.id,
      is_recommended,
      content,
      game_id: review.game_id,
      userId: sessionUser.id,
    };
    await dispatch(update_review(updatedReview));

    history.push(`/games/${review.game_id}`)
  };

  const recommendation = () => {
    let recommend = review?.is_recommended;
    return recommend ? "Recommended" : "Not Recommended";
  };

  const handleDelete = (reviewId) => {
    dispatch(delete_review(reviewId));
    setShowModal(false);
    history.push(`/games/${review.game_id}`);
  };

  // Needs the if else again to close form on update
  const ShowForm = () => {
    let review = document.getElementById("left-offset-review-content-text");
    let editreview = document.getElementById("left-offset-review-content-edit");
    if (formDiv) {
      setFormDiv(false)
      review.style.display = "block"
      return editreview.style.display = "none"

    } if (!formDiv)
      review.style.display = "none"
    editreview.style.display = "block"
    return setFormDiv(true)
  };

  const ShowReview = () => {
    return (
      <>
        {hasSubmitted && errorModal && (
          <Modal onClose={() => setErrorModal(false)}>
            <div className="modal-content-text">
              <h2>UPDATE YOUR REVIEW FOR</h2>
              <div className="error-modal">
                {errors.map((error, index) => (
                  <div key={index}>{error}</div>
                ))}
              </div>
              <div className="modal-content-bttn-ok">
                <span onClick={e => setErrorModal(false)}>OK</span>
              </div>
            </div>

          </Modal>
        )}
        <div className="review-rating-subbody">
          No one has rated this review as helpful yet
        </div>
        <div className="recommendation-subbody">
          <div className="recommendation-summary">
            <img
              src={
                review?.is_recommended
                  ? "https://store.cloudflare.steamstatic.com/public/shared/images/userreviews/icon_thumbsUp.png"
                  : "https://community.cloudflare.steamstatic.com/public/shared/images/userreviews/icon_thumbsDown.png?v=1"
              }
              width="44"
              height="44"
              alt=""
            />
          </div>
          <div className="review-rating">{recommendation()}</div>
        </div>
        <div className="recommendation-created-at"></div>
        <div className="review-detail-content">
          <p>{review?.content}</p>
        </div>
        <div className="review_comments_header">
          Comments are disabled for this review.
        </div>
      </>
    )
  }
  const handleChange = (e) => {
    return setContent(e.target.value)
  }

  const EditReview = ({ review, gameId }) => {
    return (
      <>
        <div className="review-edit-container">
          <form onSubmit={handleSubmit} className="review-content-container">
            <div className="recommend_control_box">
              <div className="is_recommended-div">Do you recommend this game?</div>
              <div className='edit_vote_up_down_container'>
                <button className={is_recommended ? 'recommend_clicked' : 'recommend_yes'}
                  type='button'
                  // defaultValue={content}
                  onClick={(e) => {
                    setIs_Recommended(true)
                    // setStyle_Rec_Yes("recommend_clicked")
                    // setStyle_Rec_No("recommend_no")
                  }}
                >
                  <span>
                    <i className="fa-solid fa-thumbs-up"></i>
                    Yes
                  </span>
                </button>
                <button className={!is_recommended ? 'recommend_clicked' : 'recommend_no'}
                  type='button'
                  // defaultValue={review?.is_recommended}
                  onClick={(e) => {
                    setIs_Recommended(false)
                    // setStyle_Rec_No("recommend_clicked")
                    // setStyle_Rec_Yes("recommend_yes")
                  }}
                >
                  <span>
                    <i className="fa-solid fa-thumbs-down"></i>
                    No
                  </span>
                </button>
              </div>
              <div className="content-div">
                <label htmlFor='content'>
                </label>
                <textarea
                  key={review?.id}
                  className='create_edit_textbox'
                  type='text'
                  defaultValue={content}
                  // value={review?.content}
                  placeholder={review?.content}
                  onBlur={handleChange}
                />
                <div className="review_controls_body">
                  <div className="review_controls_container">
                    <span>visibility</span>
                  </div>

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
  console.log(formDiv, "formDiv after editReview")

  return (
    <>
      <div className="content-body">
        <div className="user-banner">
          <a href={`/users/${sessionUser.id}`}>
            <div className="profile_avatar_small">
              <img
                id="profile_img_small"
                src={sessionUser?.profile_picture}
                alt=""
              ></img>
            </div>
          </a>
          <div className="profile_header_links">
            <span className="profile_header_name">
              <a
                className="profile_link_content"
                href={`/users/${sessionUser.id}`}
              >
                {sessionUser.username}
              </a>
            </span>
            <span className="profile_header_arrows">{'>>'}</span>
            <span className="profile_reviews_text">
              <a
                className="profile_link_content"
                href={`/users/${sessionUser.id}`}
              >
                Reviews
              </a>
            </span>
            <span className="profile_header_arrows">{'>>'}</span>
            <a
              className="profile_link_content"
              href={`/games/${review?.game_id}`}
            >
              <span className="profile_reviews_text">Game</span>
            </a>
          </div>
        </div>
        <div className="main-content-container">
          <div className="review-detail-container">
            <div id="left-offset-review-content-text" style={{ display: "block" }}><ShowReview /></div>
            <div id="left-offset-review-content-edit" style={{ display: "none" }}><EditReview review={review} gameId={gameId} /></div>
            <div className="right-offset-detail-subbody">
              <div className="game-review-links">
                <div className="game_logo_img">
                  <img
                    id="main_game_rev_img"
                    src="/images/spelheader.jpg"
                    alt=""
                    width="294"
                    height="138"
                  ></img>
                </div>
                <a
                  className="game_page_link"
                  href={`/games/${review?.game_id}`}
                >
                  View Store page
                </a>
                <a className="game_page_link" href={`/`}>
                  View Community Hub
                </a>
                <a className="game_page_link" href={`/games`}>
                  Find More Like This
                </a>
              </div>

              {sessionUser?.id === review?.user_id && (
                <div className="user-controls-container">
                  <div className="owner_panel_title">OWNER CONTROLS</div>
                  <div className="owner_panel_bttn">
                    <img
                      className="owner_action_img"
                      src="https://community.akamai.steamstatic.com/public/images/sharedfiles/icons/icon_edit.png"
                      alt=""
                    />
                    <a href="#" onClick={() => ShowForm()}>
                      Update Review
                    </a>
                  </div>
                  <div className="owner_controls_divider"></div>

                  <a
                    href="#"
                    onClick={(e) => setShowModal(true)}
                    className="owner_panel_bttn"
                  >
                    <img
                      className="owner_action_img"
                      src="https://community.akamai.steamstatic.com/public/images/sharedfiles/icons/icon_delete.png"
                      alt=""
                    />
                    Delete
                  </a>
                  {showModal && (
                    <Modal onClose={() => setShowModal(false)}>
                      <div className="delete-review-form">
                        <h2>DELETE REVIEW?</h2>
                        <p>
                          Are you sure you want to delete this review? This cannot
                          be undone
                        </p>
                        <div className="modal-content-bttns">
                          <span onClick={() => handleDelete(review.id)}>
                            {" "}
                            Ok{" "}
                          </span>
                          <span onClick={() => setShowModal(false)}>
                            {" "}
                            Cancel{" "}
                          </span>
                        </div>
                      </div>
                    </Modal>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ReviewDetails;
