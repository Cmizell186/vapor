import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useParams } from "react-router-dom";
import { update_game } from "../../store/game";

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

  // for aws upload
  const [image, setImage] = useState([]);
  const [imageLoading, setImageLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('image', image);
    setHasSubmitted(true);

    // aws is slow! adding a loading message for users to not get too worried!
    setImageLoading(true);

    const updatedGame = {
      id: gamelisting.id,
      title,
      price,
      description,
      release_date,
      is_mature,
      video,
      formData,
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
    setImage([]);
    setDeveloper("");

    if (newGame) {
      history.push("/games");
    }
  };
  const updateImage = (e) => {
    const file = e.target.files[0];
    setImage(file);
};
const vid_upload = (e) => {
    setVideo(e.target.value);
};

  return (
    <>
      <div className="game-listing-form-container">
        <p>
          This area is where you configure the presentation of your product's
          page in the Steam store. Please complete all the fields marked. If you
          need help, check out the Store Page Best Practices documentation for a
          video walkthrough of configuring your store page.
        </p>
        <form onSubmit={handleSubmit} className="add-game-container">
          {hasSubmitted && (
            <div className="error">
              {errors.map((error, index) => (
                <div key={index}>{error}</div>
              ))}
            </div>
          )}
          <div className="title-div">
            <label htmlFor="title">Game Name:</label>
            <input
              name="title"
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>
          <div className="price-div">
            <label htmlFor="price">Price:</label>
            <input
              name="price"
              type="number"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
            />
          </div>
          <div className="description-div">
            <label htmlFor="description">Description:</label>
            <textarea
              className="create_textbox"
              type="text"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </div>
          <div className="release_date-div">
            <label htmlFor="release_date">Release Date:</label>
            <input
              name="release_date"
              type="date"
              value={release_date}
              onChange={(e) => setRelease_Date(e.target.value)}
            />
          </div>
          <div className="is_mature-div">
            <label htmlFor="is_mature">Mature Rating?:</label>
            <input
              name="is_mature"
              type="radio"
              value={true}
              onChange={(e) => setIs_Mature(true)}
              checked={is_mature === true}
            />
          </div>
          <div className="video-div">
            <label htmlFor="video">Trailers or Video clips:</label>
            <input
              name="video"
              type="text"
              multiple
              value={video}
              onChange={vid_upload}
            />
          </div>
          <div className="img-div">
            <label htmlFor="image">Images:</label>
            <input name="image" type="file" accept="image/*" onChange={updateImage} />
          </div>
          <div className="developer-div">
            <label htmlFor="developer">Developer:</label>
            <input
              name="developer"
              type="text"
              value={developer}
              onChange={(e) => setDeveloper(e.target.value)}
            />
          </div>
          <button className={"button btn-submit-game"} type="submit">
            Update Game Details
          </button>
          {(imageLoading)&& <p>Loading...</p>}
        </form>
      </div>
    </>
  );
};

export default EditGame
