import React, { useEffect, useState } from "react";
import { get_one_review } from "../../store/reviews";
import { useDispatch, useSelector } from "react-redux";
import { useParams, useHistory } from "react-router-dom";
import ReviewEditModal from "./ReviewsEditModal";
import { delete_review } from "../../store/reviews";
import { Modal } from "../../context/Modal";

import "./index.css";

const ReviewDetails = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const { gameId } = useParams();
  const game = useSelector((state) => state.games[gameId]);
  const { reviewId } = useParams();
  const review = useSelector((state) => state.reviews[reviewId]);
  // const reviews = useSelector((state) => Object.values(state.reviews));
  const sessionUser = useSelector((state) => state.session.user);
  const [showModal, setShowModal] = useState(false);

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

  return (
    <>
      <div className="content-body">
        <div className="user-banner">
          <a href={`/users/${sessionUser.id}`}>
            <div className="profile_avatar_small">
              <img id="profile_img_small" src={sessionUser?.profile_picture} alt=""></img>
            </div>
          </a>
          <div className="profile_header_links">
            <span className="profile_header_name">
              <a className="profile_link_content" href={`/users/${sessionUser.id}`}>{sessionUser.username}</a>
            </span>
          <span className="profile_header_arrows">>></span>
            <span className="profile_reviews_text">
              <a className="profile_link_content" href={`/users/${sessionUser.id}`}>Reviews</a>
            </span>
          <span className="profile_header_arrows">>></span>
          <a className="profile_link_content" href={`/games/${review?.game_id}`}>
            <span className="profile_reviews_text">Game</span>
          </a>
          </div>
        </div>
        <div className="main-content-container">
        <div className="review-detail-container">
          <div className="left-offset-review-content-subbody">
            <div className="review-rating-subbody">
              <p>No one has rated this review as helpful yet</p>
            </div>
            <div className="recommendation-subbody">
              <img id="thumb_img" src="/images/thumbs.png" alt=""></img>
              <h2>{recommendation()}</h2>
            </div>
            <p>{review?.content}</p>
          </div>
          <div className="right-offset-detail-subbody">
            <div className="game-review-links">
            <div className="game_logo_img">
            <img
                id="main_game_rev_img"
                src="/images/spelheader.jpg"
                alt=""
                width="294" height="138" alt=""
             ></img>
            </div>
            <a className="game_page_link" href={`/games/${review?.game_id}`}>View Store page</a>
            <a className="game_page_link" href={`/`}>View Community Hub</a>
            <a className="game_page_link" href={`/games`}>Find More Like This</a>
            </div>

            {sessionUser?.id === review?.user_id && (
              <div className="user-controls-container">
                <div className="owner_panel_title">OWNER CONTROLS</div>
                <ReviewEditModal
                  review={review}
                  user={{ ...sessionUser }}
                  gameId={gameId}
                />
                <button
                  onClick={() => setShowModal(true)}
                  className="delete-bttn"
                >
                  Delete
                </button>
                {showModal && (
                  <Modal onClose={() => setShowModal(false)}>
                    <h2>DELETE REVIEW?</h2>
                    <p>
                      Are you sure you want to delete this review? This cannot
                      be undone
                    </p>
                    <div className="modal-content-bttn-ok">
                      <span onClick={() => handleDelete(review.id)}> Ok </span>
                      <span onClick={() => setShowModal(false)}> Cancel </span>
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
