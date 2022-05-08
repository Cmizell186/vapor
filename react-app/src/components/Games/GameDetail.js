import { get_all_reviews, get_one_review } from "../../store/reviews"
import { get_one_game } from "../../store/game"
import { useDispatch, useSelector } from "react-redux"
import { useParams, useHistory, Link } from "react-router-dom";
import React, { useEffect, useState } from 'react';
import ReviewGame from "../Reviews/ReviewsForm";
import Reviews from "../Reviews/ReviewList";
import ReviewSummary from "../Reviews/ReviewSummary";
import EditGame from "./GameEditForm";
import { delete_game } from "../../store/game";
import { Modal } from "../../context/Modal";
import GameImageModal from "./GameImagesModal";
import { create_cart } from '../../store/cart'
import AddToCart from "../Carts/AddToCart";

import './index.css'
import './GameDetail.css'

const GameDetails = ({user, loaded}) => {
  const sessionUser = useSelector((state) => state.session.user);
  const { gameId } = useParams();
  const dispatch = useDispatch();
  const history = useHistory();
  const game = useSelector((state) => state.games[gameId])
  const { reviewId } = useParams();
  const review = useSelector((state) => state.reviews[reviewId]);
  const reviews = useSelector(state => Object.values(state.reviews))
  const [showModal, setShowModal] = useState(false);
  const filteredReviews = reviews.filter(review => review.game_id === +gameId)
  const userReview = reviews.filter(review => review?.user_id === sessionUser?.id && review.game_id === +gameId)
  const all_entry_carts = useSelector(state => Object.values(state.carts)).filter(entry => entry.game_id === +gameId) // We get back all carts that are in the library for this user that match the game id

  // array will have an element if they are owned
  const all_owned_carts =  all_entry_carts.filter(entry =>  entry.is_owned)
  console.log(all_owned_carts)

  // array will have an element if they are in cart and not owned
  const all_not_owned_carts =  all_entry_carts.filter(entry =>  !entry.is_owned)

  // if the array has a length, than the owner already owns the game
  const is_owned = all_owned_carts.length > 0;

  // if the array has a length, than the owner doesnt own it
  const in_cart_boolean = all_not_owned_carts.length > 0;


  useEffect(() => {
    dispatch(get_all_reviews())
    dispatch(get_one_game(gameId))
  }, [dispatch, gameId])

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

  const Owner = () => {
    return (
      <div className="reviewed_div">
        <ReviewSummary review={userReview[0]} />
      </div>
    )
  }

  const NotOwner = () => {
    return (
      <div id="review_div">
       {all_owned_carts.length ? <ReviewGame gameId={gameId} /> : <></> }
      </div>
    )
  }

  // let hasReviewed;
  //  (sessionUser && sessionUser?.id === userReview[0]?.user_id) ?
  //   hasReviewed = (
  //     <>
  //       <ReviewSummary review={userReview[0]} />
  //     </>
  //   )
  // :
  //   hasReviewed = (
  //     <>
  //       <ReviewGame gameId={gameId} />
  //     </>
  //   )


    //
  const DATE_OPTIONS = { year: 'numeric', month: 'short', day: 'numeric' };

  return (
    <>
      <div id="page_content_container">
        <div id="game_details_container">
          <div id="game_details_box">
            <div id="title_container">
              <h1>{game?.title}</h1>
            </div>
          <div id="image_details_container">
            <div id="selected_media_div">
              <video key={game?.video} controls="controls" id="game_video_detail_id" preload="none" playsInline="true" autoPlay={true} muted width="1140" loop>
                <source src={game?.video} type="video/webm" loop/>
              </video>
            <div id="scroll_container">
              <div id="scroll_div">
                <div id="video_div">
                  <div className="thumb_div">
                    <video key={game?.video} id="game_video_detail_mini" preload="none" autoPlay={true} muted width="1140" loop>
                      <source src={game?.video} type="video/webm" loop/>
                    </video>
                  </div>
                </div>
                  <div className="thumb_div">
                    <img className="main_game_image" src={game?.images[1]?.image} alt="" />
                  </div>
                  <div className="thumb_div">
                    <img className="main_game_image" src={game?.images[2]?.image} alt="" />
                  </div>
                  <div className="thumb_div">
                    <img className="main_game_image" src={game?.images[3]?.image} alt="" />
                  </div>
                  <div className="thumb_div">
                    <img className="main_game_image" src={game?.images[4]?.image} alt="" />
                  </div>
                </div>
              </div>
            </div>
          <div id="details_subcontainer">
            <div id="main_game_image_container">
              <img id="main_game_image" src={game?.images[0]?.image} alt="" />
            </div>
            <div id="description_paragraph">
              <p>{game?.description}</p>
            </div>
          <div id="game_about_info_div">
            <div id="all_reviews_div">
              <p>ALL REVIEWS:</p>
              <p>Very Positive</p>
            </div>
            <div>
              <div id="release_date_div">
                <p>RELEASE DATE:</p>
                <p>{new Date(game?.release_date).toLocaleDateString('en-US', DATE_OPTIONS)}</p>
              </div>
            </div>
            <div id="developer_name_div" className="subdetail-divs">
              <p>PUBLISHER:</p>
              <p>{game?.developer}</p>
            </div>
          </div>
            <div id="game_id_tags">
              Popular user-defined tags for this product:
                <div id="game_tags">
                  {game?.tags.map(tag =>
                    <div key={tag.genres.id} id="genre_tags">
                      {tag.genres.title}
                    </div>
                  )}
                </div>
            </div>
            </div>
          </div>
        </div>
      </div>
      <div id="sub_container">
        <div id="sub_container_game">
          <div id="sub_container_game_panel">
          <div id="game_image_update_container">
            {user.user?.id == game?.user_id ? <GameImageModal /> : <></>}
          </div>
      <div id="add_to_cart_container">
        <div className="add-cart-container">
          {!is_owned && ( <AddToCart handleAddToCart={handleAddToCart}
            in_cart_boolean={in_cart_boolean} game={game} />
          )}
        </div>
      </div>
      <div id='game_options_container'>
      <div id="game_edit_delete_container">
        {sessionUser?.id === game?.user_id ? <GameImageModal /> : <></>}
        {sessionUser?.id === game?.user_id && (
          <div id='user_controls_container'>
            <div className="control_options">
            <img
              id="owner_update_img"
              src="https://community.akamai.steamstatic.com/public/images/sharedfiles/icons/icon_edit.png"
              alt=""
            />
            {/* was not able to pass prop to <Link> */}
            <Link id="game_edit_link" to={`/games/${game?.id}/edit`}>  Update Game Details
             </Link>
            </div>
            <div className="control_options">
            <img
              id="owner_delete_img"
              src="https://community.akamai.steamstatic.com/public/images/sharedfiles/icons/icon_delete.png"
              alt=""
            />
            <a href="#"
              onClick={() => setShowModal(true)}
              className="delete-bttn"
            >
              Delete
            </a>
            </div>
            {showModal && (
              <Modal onClose={() => setShowModal(false)}>
                <h2>DELETE GAME LISTING?</h2>
                <p>
                  Are you sure you want to remove your game listing from the Steam Store?
                </p>
                <div className="modal-content-bttn-ok">
                  <span onClick={() => handleDelete(game.id)}> Delete </span>
                  <span onClick={() => setShowModal(false)}> Cancel </span>
                </div>
              </Modal>
            )}
          </div>
        )}
      </div>
      </div>
      <div id="user_review_container">
        <div className="user_review_box">
        {(sessionUser && sessionUser?.id === userReview[0]?.user_id) ? ( <Owner review={userReview[0]} /> ) : ( <NotOwner gameId={gameId} /> )}
          {/* {loaded && hasReviewed} */}
        </div>
        </div>
        <div id="game_description">
          <h4>ABOUT THIS GAME</h4>
            <div id="description_box">
              <p>{game?.description}</p>
            </div>
        </div>
        {filteredReviews.length ? (
          <>
            <div id="customer_reviews_div">CUSTOMER REVIEWS</div>
              <div className='reviews_container'>
                <Reviews user={user} filteredReviews={filteredReviews} />
              </div>
          </> ) : <></>
        }
        </div>
        </div>
        </div>
      </div>
    </>
  )
}

export default GameDetails;
