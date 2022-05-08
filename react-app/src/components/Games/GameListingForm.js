import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useParams } from "react-router-dom";
import { get_all_games } from "../../store/game"
import { get_one_game } from "../../store/game"
import { create_game } from "../../store/game";
import VaporWorksModal from "./VaporworksModal";
import { Modal } from "../../context/Modal";
import "./create.css";

const CreateGame = ({ user, loaded }) => {
  const sessionUser = useSelector((state) => state.session.user);
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const [release_date, setRelease_Date] = useState("");
  const [is_mature, setIs_Mature] = useState(null);
  const [video, setVideo] = useState("");
  const { id } = useParams();
  const games = useSelector(state => Object.values(state.games))
  const addedGame = games[games.length - 1]
  const userGame = games.filter(game => game?.user_id === sessionUser?.id && game?.id === addedGame?.id)
  const [showModal, setShowModal] = useState(true);
  const [developer, setDeveloper] = useState("");
  const [errors, setErrors] = useState([]);
  const [hasSubmitted, setHasSubmitted] = useState(false);
  const history = useHistory();
  const dispatch = useDispatch();

  // useEffect(() => {
  //   dispatch(get_all_games())
  //   dispatch(get_one_game(id))
  // }, [dispatch])

  const handleSubmit = async (e) => {
    e.preventDefault();
    setHasSubmitted(true);

    const newgame = {
      title,
      price,
      description,
      release_date,
      is_mature,
      video,
      developer,
      user_id: sessionUser.id,
    };
    const updated_game = await dispatch(create_game(newgame));

    // set all back to empty form field
    setTitle("");
    setPrice("");
    setDescription("");
    setRelease_Date("");
    setIs_Mature(false);
    setVideo("");
    setDeveloper("");
    setHasSubmitted(false);
    history.push(`/games/${updated_game?.id}`); // was ${userGame[0]?.id + 1 ??

  };

  const vid_upload = (e) => {
    setVideo(e.target.value);
  };

  return (
    <>
      <VaporWorksModal />
      <div className="game-listing-form-container">
        <img
          className="vw_logo_blk"
          src="/static/images/vaporworks_logo.png"
          alt=""
        ></img>
        <div className="vw_intro_text">
          Vaporworks is a set of tools and services that help game developers
          and publishers build their games and get the most out of distributing
          on Vapor.
        </div>
        <div className="vid_div">
          <video id="labworks_video" autoPlay={true} muted width="540" loop>
            <source
              src="https://cdn.akamai.steamstatic.com/appmgmt/home/game_business.webm"
              type="video/webm"
              loop
            />
            <source
              src="https://cdn.akamai.steamstatic.com/appmgmt/home/game_business.webm"
              type="video/mp4"
            />
            Sorry, your browser doesn't support embedded videos.
          </video>
        </div>
        <img
          className="vw_stats_img"
          src="/static/images/vw_stats_img.png"
          alt=""
        ></img>
        {/* <div className="background_vw_logo"> */}
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
          <div className="create_form">
            <p className="create_label p">
              This area is where you configure the presentation of your
              product's page in the Vapor store. Please complete all the fields
              marked. If you need help, check out the Store Page Best Practices
              documentation for a video walkthrough of configuring your store
              page.
            </p>
            <div className="form_body">
              <form onSubmit={handleSubmit} className="add-game-container">
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
                <button id="vw_jared_button" type="submit">
                  Submit Game
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
      {/* </div> */}
    </>
  );
};

export default CreateGame;
