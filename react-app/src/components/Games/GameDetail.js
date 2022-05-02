import { get_all_reviews } from "../../store/reviews"
import { get_one_game } from "../../store/game"
import { useDispatch, useSelector } from "react-redux"
import { useParams } from "react-router-dom";
import React, { useEffect, useState } from 'react';
import ReviewGame from "../Reviews/ReviewsForm";

const GameDetails = () => {
  const { gameId } = useParams();
  const dispatch = useDispatch();
  const game = useSelector(state => state.games[gameId])
  const reviews = useSelector(state => Object.values(state.reviews))

  const filteredReviews = reviews.filter(review => review.game_id == gameId)

  useEffect(() => {
    dispatch(get_all_reviews())
    dispatch(get_one_game(gameId))
  }, [dispatch])

  const DATE_OPTIONS = { year: 'numeric', month: 'short', day: 'numeric' };

  return (
    <>
      <div>
        <h2>{game?.title}</h2>
        <p>{game?.description}</p>
        <p>{game?.price}</p>
        <p>{new Date(game?.release_date).toLocaleDateString('en-US', DATE_OPTIONS)}</p>
        <p>{game?.is_mature}</p>
        <p>{game?.video}</p>
        <p>{game?.img}</p>
        <img src={game?.img} alt=""/>
        <p>{game?.developer}</p>
      </div>
      <div className='create-reviews-container'>
        <ReviewGame gameId={gameId}/>
      </div>
      <div className='reviews-container'>
      { filteredReviews?.map(review =>
        <div key={review.id}>
          <h2>
            {review.content}
          </h2>
        </div>
      )}
      </div>
    </>
  )
  }

export default GameDetails;
