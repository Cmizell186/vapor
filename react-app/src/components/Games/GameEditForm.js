import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useParams } from "react-router-dom";
import { update_game } from "../../store/game";
import './edit.css';

const EditGame = ({ gamelisting, hideModal }) => {
  const sessionUser = useSelector((state) => state.session.user);
  const { id } = useParams()
  const history = useHistory();
  const dispatch = useDispatch();
  const games = useSelector((state) => state.games)
  const gamesList = Object.values(games)
  const game = gamesList.filter((game) => game.id === +id)[0];
  const [title, setTitle] = useState(gamelisting?.title);
  const [price, setPrice] = useState(gamelisting?.price);
  const [description, setDescription] = useState(gamelisting?.description);
  const [release_date, setRelease_Date] = useState(gamelisting?.release_date);
  const [is_mature, setIs_Mature] = useState(gamelisting?.is_mature);
  const [video, setVideo] = useState(gamelisting?.video);
  const [developer, setDeveloper] = useState(gamelisting?.developer);
  const [errors, setErrors] = useState([]);
  const [hasSubmitted, setHasSubmitted] = useState(false);


  const handleSubmit = async (e) => {
    e.preventDefault();
    setHasSubmitted(true);

    const updatedGame = {
      id: gamelisting.id,
      title,
      price,
      description,
      release_date,
      is_mature,
      video,
      developer,
      userId: sessionUser.id,
    };
    let newGame = await dispatch(update_game(updatedGame));
    setTitle("");
    setPrice("");
    setDescription("");
    setRelease_Date("");
    setIs_Mature(false);
    setVideo([]);
    setDeveloper("");

    if (newGame) {
      hideModal();
    }
  };

const vid_upload = (e) => {
    setVideo(e.target.value);
};

  return (
    <>
      <div className="edit-listing-form-container">
      <img
          className="vw_logo_blk"
          src="/static/images/vaporworks_logo.png"
          alt=""
        ></img>
          <div className="game_listing_form_main_body">
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
                  Vaporworks
                </a>
              </span>
              <span className="profile_header_arrows">>></span>
              <a className="profile_link_content" href="/games/new">
                <span className="profile_reviews_text">New</span>
              </a>
            </div>
          </div>

        <div className="edit_form">

        </div>
        <p className="edit_label p">
          You can configure the details of your product here.
           Please complete all the fields marked. If you
          need help, check out the Store Page Best Practices documentation for a
          video walkthrough of configuring your store page.
        </p>
        <div className="edit_form_body">

        </div>
        <form onSubmit={handleSubmit} className="edit-game-container">
          {hasSubmitted && (
            <div className="error">
              {errors.map((error, index) => (
                <div key={index}>{error}</div>
              ))}
            </div>
          )}
          <div className="title-div">
            <label className="create_label" htmlFor="title">Game Name:</label>
            <input
              className="create_input"
              name="title"
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>
          <div className="price-div">
            <label className="create_label" htmlFor="price">Price:</label>
            <input
              className="create_input"
              name="price"
              type="number"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
            />
          </div>
          <div className="description-div">
            <label className="create_label" htmlFor="description">Description:</label>
            <textarea
              className="create_textbox create_input"
              type="text"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </div>
          <div className="release_date-div">
            <label className="create_label" htmlFor="release_date">Release Date:</label>
            <input
              className="create_input"
              name="release_date"
              type="date"
              value={release_date}
              onChange={(e) => setRelease_Date(e.target.value)}
            />
          </div>
          <div className="is_mature-div">
            <label className="create_label" htmlFor="is_mature">Mature Rating?:</label>
            <input
              className="create_input"
              type="checkbox"
              checked={is_mature ? true : false}
              value={is_mature}
              name="is_mature"
              onChange={e => is_mature ? setIs_Mature(false) : setIs_Mature(true) }
            />
          </div>
          <div className="video-div">
            <label className="create_label" htmlFor="video">Trailers or Video clips:</label>
            <input
              className="create_input"
              name="video"
              type="text"
              multiple
              value={video}
              onChange={vid_upload}
            />
          </div>
          <div className="developer-div">
            <label className="create_label" htmlFor="developer">Developer:</label>
            <input
              className="create_input"
              name="developer"
              type="text"
              value={developer}
              onChange={(e) => setDeveloper(e.target.value)}
            />
          </div>
          <button className={"button btn-submit-game"} type="submit">
            Update Game Details
          </button>
        </form>
      </div>
      </div>
    </>
  );
};

export default EditGame
