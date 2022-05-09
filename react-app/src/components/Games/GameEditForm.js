import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useParams } from "react-router-dom";
import { update_game } from "../../store/game";
import { get_all_games } from "../../store/game";
import {get_one_image} from '../../store/image';
import "./edit.css";

const EditGame = () => {
  const sessionUser = useSelector((state) => state.session.user);
  const { gameId } = useParams();
  const history = useHistory();
  const dispatch = useDispatch();
  const gamesList = useSelector((state) => Object.values(state.games));
  const game = gamesList.filter((game) => game.id === +gameId);
  const mygame = game[0];
  const [title, setTitle] = useState(mygame?.title);
  const [price, setPrice] = useState(mygame?.price);
  const [description, setDescription] = useState(mygame?.description);
  const [release_date, setRelease_Date] = useState(mygame?.release_date);
  const [is_mature, setIs_Mature] = useState(mygame?.is_mature);
  const [video, setVideo] = useState(mygame?.video);
  const [developer, setDeveloper] = useState(mygame?.developer);
  const [errors, setErrors] = useState([]);
  const [hasSubmitted, setHasSubmitted] = useState(false);
  const [maturity_rating, setMaturity_Rating] = useState(mygame?.maturity_rating)
  const userImage = useSelector(state => Object.values(state.images))
  const pfp = userImage[0];

  useEffect(() => {
    dispatch(get_all_games());
    dispatch(get_one_image(sessionUser?.id))
  }, [dispatch]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setHasSubmitted(true);

    const updatedGame = {
      id: mygame?.id,
      title,
      price,
      description,
      release_date,
      maturity_rating,
      video,
      developer,
      userId: sessionUser.id,
    };
    let thisGame = await dispatch(update_game(updatedGame));
    setTitle("");
    setPrice("");
    setDescription("");
    setRelease_Date("");
    setMaturity_Rating("")
    setVideo([]);
    setDeveloper("");
    if (thisGame) {
      history.push(`/games/${mygame?.id}`);
    }
  };

  const vid_upload = (e) => {
    setVideo(e.target.value);
  };

  return (
    <>
      <div className="edit-listing-form-container">
        <img
          className="vw_logo_wht"
          src="/static/images/vaporworks_logo_inverted.png"
          alt=""
        ></img>
        <img
          className="vw_lab_edit_bg"
          src="/static/images/background_lab_long.jpg"
          alt=""
        ></img>
        <div className="edit_listing_form_main_body">
          <div className="user-banner">
            <a href={`/users/${sessionUser.id}`}>
              <div className="profile_avatar_small">
                <img
                  id="profile_img_small"
                  src={pfp?.image}
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
              <span className="profile_header_arrows">{">>"}</span>
              <span className="profile_reviews_text">
                <a
                  className="profile_link_content"
                  href={`/users/${sessionUser.id}`}
                >
                  Vaporworks
                </a>
              </span>
              <span className="profile_header_arrows">{">>"}</span>
              <a className="profile_link_content" href="/games/new">
                <span className="profile_reviews_text">New</span>
              </a>
            </div>
          </div>

          <div className="edit_form">
            <div id="game_edit_form_title">
              <h2>Update Your Product Details</h2>
            </div>
            <p className="create_label p">
              You can configure the details of your product here. Please
              complete all the fields marked. If you need help, check out the
              Store Page Best Practices documentation for a video walkthrough of
              configuring your store page.
            </p>
            <div className="edit_form_body">
              <form onSubmit={handleSubmit} className="edit-game-container">
                {hasSubmitted && (
                  <div className="error">
                    {errors.map((error, index) => (
                      <div key={index}>{error}</div>
                    ))}
                  </div>
                )}
                <div className="title-div">
                  <label className="create_label" htmlFor="title">
                    Game Name:
                  </label>
                  <input
                    className="create_input"
                    name="title"
                    type="text"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                  />
                </div>
                <div className="price-div">
                  <label className="create_label" htmlFor="price">
                    Price:
                  </label>
                  <input
                    className="create_input"
                    name="price"
                    type="number"
                    value={price}
                    onChange={(e) => setPrice(e.target.value)}
                  />
                </div>
                <div className="description-div">
                  <label className="create_label" htmlFor="description">
                    Description:
                  </label>
                  <textarea
                    className="create_textbox create_input"
                    type="text"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                  />
                </div>
                <div className="release_date-div">
                  <label className="create_label" htmlFor="release_date">
                    Release Date:
                  </label>
                  <input
                    className="create_input"
                    name="release_date"
                    type="date"
                    value={release_date}
                    onChange={(e) => setRelease_Date(e.target.value)}
                    required={true}
                  />
                </div>
                <div className="maturity-rating-div">
                  <label className="create_label" htmlFor="maturity_rating">ESRB Rating:
                  <select
                    className="maturity_rating_select_input create_input"
                    value={maturity_rating}
                    onChange={(e) => setMaturity_Rating(e.target.value)}
                  >
                    <option defaultValue="Everyone">Everyone</option>
                    <option value="Everyone 10+">Everyone 10+</option>
                    <option value="Teen">Teen</option>
                    <option value="Mature 17+">Mature 17+</option>
                    <option value="Adults Only 18+">Adults Only 18+</option>
                    <option value="Rating Pending">Rating Pending</option>
                  </select>
                  </label>
                </div>
                <div className="video-div">
                  <label className="create_label" htmlFor="video">
                    Trailers or Video clips:
                  </label>
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
                  <label className="create_label" htmlFor="developer">
                    Developer:
                  </label>
                  <input
                    className="create_input"
                    name="developer"
                    type="text"
                    value={developer}
                    onChange={(e) => setDeveloper(e.target.value)}
                  />
                </div>
                <button id="vw_edit_jared_button" type="submit">
                  Submit Game
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default EditGame;
