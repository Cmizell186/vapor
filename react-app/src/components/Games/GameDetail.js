import { get_all_reviews } from "../../store/reviews"
import { get_one_game } from "../../store/game"
import { useDispatch, useSelector } from "react-redux"
import { useParams } from "react-router-dom";
import React, { useEffect } from 'react';
import ReviewGame from "../Reviews/ReviewsForm";
import GameEditModal from "./GameEditModal"
import './index.css'

const GameDetails = () => {
  const sessionUser = useSelector((state) => state.session.user);
  const { gameId } = useParams();
  const dispatch = useDispatch();
  const game = useSelector(state => state.games[gameId])
  const reviews = useSelector(state => Object.values(state.reviews))

  const filteredReviews = reviews.filter(review => review.game_id === +gameId)

  useEffect(() => {
    dispatch(get_all_reviews())
    dispatch(get_one_game(gameId)) // warning here - React Hook useEffect has a missing dependency: 'gameId'. Either include it or remove the dependency array
  }, [dispatch])

  const DATE_OPTIONS = { year: 'numeric', month: 'short', day: 'numeric' };

  return (
    <>
      <div id="page-content-container">
        <div id="title-container">
          <h2>{game?.title}</h2>
        </div>
        <div id="image-details-container">
          <div id="react-media-subcontainer">
            <img id="selected-image" src={'https://community.clover.com/themes/base/admin/img/default-coverImage.png'} alt="" />
          </div>
          <div id="details-subcontainer">
            <div>
              <img id="main-game-image" src='https://community.clover.com/themes/base/admin/img/default-coverImage.png' alt="" />
            </div>
            <div id="description-paragraph">
              <p>{game?.description}</p>
            </div>
            <div id="user-review-div" className="subdetail-divs">
              <p>ALL REVIEWS:</p>
              <p>Very Positive</p>
            </div>
            <div>
              <div id="developer-name-div" className="subdetail-divs">
                <p>RELEASE DATE:</p>
                <p>{new Date(game?.release_date).toLocaleDateString('en-US', DATE_OPTIONS)}</p>
              </div>
            </div>
            <div id="developer-name-div" className="subdetail-divs">
              <p>PUBLISHER:</p>
              <p>{game?.developer}</p>
            </div>
          </div>
        </div>
        {/* {sessionUser?.id === game?.user_id && ( */}
        <div className='user-controls-container'>
          <GameEditModal game={game} user={{ ...sessionUser }}  />
        </div>
      {/* )} */}
        <div className='create-reviews-container'>
          <ReviewGame gameId={gameId} />
        </div>
        <div className='reviews-container'>
          {filteredReviews?.map(review =>
            <div key={review.id}>
              <h2>
                {review.content}
              </h2>
            </div>
          )}
        </div>
      </div>
    </>
  )
}

export default GameDetails;
