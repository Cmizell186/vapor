import React, { useEffect, useState } from "react";
import { get_one_review } from "../../store/reviews";
import { useDispatch, useSelector } from "react-redux";
import { useParams }  from "react-router-dom";
import ReviewEditModal from "./ReviewsEditModal"

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
      <div className="review-detail-container">
        <h2>{recommendation()}</h2>
        <p>{review?.content}</p>

        {/* {sessionUser?.id === game?.user_id && ( */}
        <div className='user-controls-container'>
          <ReviewEditModal game={game} user={{ ...sessionUser }}  />

        </div>
    {/* )} */}
      </div>
    </>
  )
}

export default ReviewDetails;
