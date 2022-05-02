import React, { useEffect, useState } from "react";
import { get_one_review } from "../../store/reviews";
import { useDispatch, useSelector } from "react-redux";
import { useParams }  from "react-router-dom";
import ReviewEditModal from "./ReviewsEditModal"
import './index.css'

const ReviewDetails = () => {
  const dispatch = useDispatch();
  const { reviewId } = useParams();
  const { gameId } = useParams();
  const game = useSelector(state => state.games[gameId])
  const review = useSelector(state => state.reviews[reviewId])
  const reviews = useSelector(state => Object.values(state.reviews))
  const sessionUser = useSelector((state) => state.session.user);

  useEffect(() => {
    dispatch(get_one_review(reviewId))
  }, [dispatch])

  const recommendation = () => {
    let recommend = review?.is_recommended
    return (recommend ? "Recommended" : "Not Recommended")
  }


  return (
    <>
    <div className="content-body">
      <div className="banner-temp">Vapor</div>
      <div className="user-banner">
        <h1>{sessionUser.username}</h1>
        <p>>> Reviews >> "Game"</p>
      </div>
      <div className="review-detail-container">
        <div className="review-content-subbody">
        <div className='review-rating-subbody'>
          <p>No one has rated this review as helpful yet</p>
        </div>
        <div className='recommendation-subbody'>
        <img id="thumb_img" src="/images/thumbs.png" alt=""></img>
        <h2>{recommendation()}</h2>
        </div>
        <p>{review?.content}</p>

        </div>
        <div className='right-offset-detail-subbody'>
          <img id="main_game_rev_img" src="/images/spelheader.jpg" alt=""></img>
          <a href="/">View Store page</a>
          <a href="/">View Community Hub</a>
          <a href="/">Find More Like This</a>

        {/* {sessionUser?.id === game?.user_id && ( */}
        <div className='user-controls-container'>
          <ReviewEditModal review={review} user={{ ...sessionUser }} gameId={gameId} />
        </div>
        {/* )} */}
        </div>
      </div>
      </div>
    </>
  )
}

export default ReviewDetails;
