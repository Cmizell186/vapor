import { get_all_reviews, get_one_review } from "../../store/reviews"
import { get_one_game } from "../../store/game"
import { useDispatch, useSelector } from "react-redux"
import { useParams, useHistory } from "react-router-dom";
import React, { useEffect, useState } from 'react';
import ReviewGame from "../Reviews/ReviewsForm";
import Reviews from "../Reviews/ReviewList";
import ReviewSummary from "../Reviews/ReviewSummary";
import GameEditModal from "./GameEditModal"
import { delete_game } from "../../store/game";
import { Modal } from "../../context/Modal";
import GameImageModal from "./GameImagesModal";
import { create_cart } from '../../store/cart'

import './index.css'

const GameDetails = ({user, loaded}) => {
  const sessionUser = useSelector((state) => state.session.user);
  const { gameId } = useParams();
  const dispatch = useDispatch();
  const history = useHistory();
  const game = useSelector((state) => state.games[gameId])
  // console.log(game.user_id, "GAME ID")
  // console.log(user.user.id, "user id")
  const { reviewId } = useParams();
  const review = useSelector((state) => state.reviews[reviewId]);
  const reviews = useSelector(state => Object.values(state.reviews))
  const [showModal, setShowModal] = useState(false);
  const filteredReviews = reviews.filter(review => review.game_id === +gameId)
  const userReview = reviews.filter(review => review?.user_id === sessionUser?.id && review.game_id === +gameId)
  const all_entry_carts = useSelector(state => Object.values(state.carts)).filter(entry => entry.game_id === +gameId) // We get back all carts that are in the library for this user that match the game id

  // array will have an element if they are owned
  const all_owned_carts =  all_entry_carts.filter(entry =>  entry.is_owned)

  // array will have an element if they are in cart and not owned
  const all_not_owned_carts =  all_entry_carts.filter(entry =>  !entry.is_owned)

  // if the array has a length, than the owner already owns the game
  const is_owned = all_owned_carts.length > 0;

  // if the array has a length, than the owner doesnt own it
  const in_cart_boolean = all_not_owned_carts.length > 0;



  useEffect(() => {
    dispatch(get_all_reviews())
    dispatch(get_one_game(gameId)) // warning here - React Hook useEffect has a missing dependency: 'gameId'. Either include it or remove the dependency array
  }, [dispatch])

  const handleDelete = (gameId) => {
    dispatch(delete_game(gameId));
    setShowModal(false);
    history.push(`/games`);
  };

  const handleAddToCart = () => {
    if(in_cart_boolean) {
      return history.push('/cart')
    } else {

      const data = {
        user_id: sessionUser.id,
        game_id: game.id,
        is_owned: false
      }

      dispatch(create_cart(data))
       return history.push('/cart')
    }
  }
  // refactor  this junk
  let hasReviewed;
   (sessionUser && sessionUser?.id === userReview[0]?.user_id) ?
    hasReviewed = (
      <>
        <ReviewSummary review={userReview[0]} />
      </>
    )
  :
    hasReviewed = (
      <>
        <ReviewGame gameId={gameId} />
      </>
    )


  const DATE_OPTIONS = { year: 'numeric', month: 'short', day: 'numeric' };

  return (
    <>
      <div id="page-content-container">
        <div id="game-details-box">
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
        {sessionUser?.id === game?.user_id ? <GameImageModal /> : <></>}
        {sessionUser?.id === game?.user_id && (
          <div className='user-controls-container'>
            <img
              className="owner_action_img"
              src="https://community.akamai.steamstatic.com/public/images/sharedfiles/icons/icon_edit.png"
              alt=""
            />
            <GameEditModal game={game} user={{ ...sessionUser }} />
            <img
              className="owner_action_img"
              src="https://community.akamai.steamstatic.com/public/images/sharedfiles/icons/icon_delete.png"
              alt=""
            />
            <a href="#"
              onClick={() => setShowModal(true)}
              className="delete-bttn"
            >
              Delete
            </a>
            {showModal && (
              <Modal onClose={() => setShowModal(false)}>
                <h2>DELETE GAME LISTING?</h2>
                <p>
                  Are you sure you want to remove your game listing from the Steam Store?
                </p>
                <div className="modal-content-bttn-ok">
                  <span onClick={() => handleDelete(game.id)}> Ok </span>
                  <span onClick={() => setShowModal(false)}> Cancel </span>
                </div>
              </Modal>
            )}
          </div>
        )}
        <div className="user_review_box">
        {loaded && hasReviewed}
        </div>
        <div className="add-cart-container">
        {!is_owned && (
        <div id="add-cart-content">
          <div id="add-cart-div">
            <div id="add-cart-items">
              <p>Buy this game now!</p>
              <div className="add-cart-items-wrapper">
                <div className="add-cart-item">
                  <h1>Buy {game?.title.toUpperCase()}</h1>
                  <div id="add-cart-item-action">
                    <div id="add-cart-item-action-div">
                      <div id="add-cart-item-price">
                        ${game?.price}
                      </div>
                      <div id="add-cart-bttn">
                        <button id="bttn-cartadd" type="button" onClick={handleAddToCart}>{in_cart_boolean ? 'In cart' : 'Add to cart'}</button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div id="right-col">
          </div>
        </div>
      )}
      </div>
        <div className="game_description_long_body">
              <h4>ABOUT THIS GAME</h4>
              <div className="description_box">
              <p>{game?.description}</p>
              </div>
        </div>
        <div className="page_content_divider"></div>
        <h6>CUSTOMER REVIEWS</h6>
        <div className='reviews-container'>
          <Reviews user={user} filteredReviews={filteredReviews} />
          {/* {filteredReviews?.map(review =>
            <div key={review.id}>
            <h2>
            {review.content}
            </h2>
            </div>
          )} */}
        </div>
        </div>
      </div>
        {user.user?.id == game?.user_id ? <GameImageModal /> : <></>}

    </>
  )
}

export default GameDetails;

// <form action="/carts" method="POST">
// <input type="hidden" name="user_id" value={sessionUser?.id} />
// <input type="hidden" name="game_id" value={game?.id} />
// <input type="hidden" name="is_owned" value={false} />
// </form>
