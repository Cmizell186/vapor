import React, { useEffect, useState } from "react";
import { get_one_review } from "../../store/reviews";
import { useDispatch, useSelector } from "react-redux";
import { useParams, useHistory } from "react-router-dom";
// import ReviewEditModal from "./ReviewsEditModal";
import EditReview from "./ReviewsEditForm";
import { delete_review } from "../../store/reviews";
import { Modal } from "../../context/Modal";

import "./index.css";

const ReviewDetails = ({ loaded }) => {
  const dispatch = useDispatch();
  const history = useHistory();
  const { gameId } = useParams();
  const { reviewId } = useParams();
  const review = useSelector((state) => state.reviews[reviewId]);
  const sessionUser = useSelector((state) => state.session.user);
  const [showModal, setShowModal] = useState(false);
  const [formDiv, setFormDiv] = useState(false);

  useEffect(() => {
    dispatch(get_one_review(reviewId)); //warning here- useEffect has a missing dependency: 'reviewId'. Either include it or remove the dependency array
  }, [dispatch]);

  const recommendation = () => {
    let recommend = review?.is_recommended;
    return recommend ? "Recommended" : "Not Recommended";
  };

  const handleDelete = (reviewId) => {
    dispatch(delete_review(reviewId));
    setShowModal(false);
    history.push(`/games/${review.game_id}`);
  };

  const showForm = async () => {
    let show = document.getElementById("left-offset-review-content-subbody");
    if (show.style.display === "none") {
      show.style.display = "block";
      setFormDiv(true);
    } else {
      show.style.display = "none";
      setFormDiv(false);
      return (
        <>
          <EditReview  review={review} gameId={gameId} />
        </>
      )
    }
  };

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
            <span className="profile_header_arrows">>></span>
            <span className="profile_reviews_text">
              <a
                className="profile_link_content"
                href={`/users/${sessionUser.id}`}
              >
                Reviews
              </a>
            </span>
            <span className="profile_header_arrows">>></span>
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
            <div id="left-offset-review-content-subbody">
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
            </div>
            {/* {!formDiv && <EditReview review={review} gameId={gameId} />} */}
            <div className="right-offset-detail-subbody">
              <div className="game-review-links">
                <div className="game_logo_img">
                  <img
                    id="main_game_rev_img"
                    src="/images/spelheader.jpg"
                    alt=""
                    width="294"
                    height="138"
                    alt=""
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
                    <a href="#" onClick={() => showForm()}>
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
