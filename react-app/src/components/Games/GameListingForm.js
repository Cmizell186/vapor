import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { create_game } from "../../store/game";

const CreateGame = () => {
    const sessionUser = useSelector((state) => state.session.user);
    const [title, setTitle] = useState("");
    const [price, setPrice] = useState("");
    const [description, setDescription] = useState("");
    const [release_date, setRelease_Date] = useState("");
    const [is_mature, setIs_Mature] = useState(false);
    const [video, setVideo] = useState([]);

    // for aws upload
    const [image, setImage] = useState(null);
    const [imageLoading, setImageLoading] = useState(false);

    const [developer, setDeveloper] = useState("");
    const [errors, setErrors] = useState([]);
    const [hasSubmitted, setHasSubmitted] = useState(false);
    // const [validationErrors, setValidationErrors] = useState([])
    const history = useHistory();
    const dispatch = useDispatch();

    const handleSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('image', image);
        setHasSubmitted(true);

        // aws is slow! adding a loading message for users to not get too worried!
        setImageLoading(true);

        const game = {
            title,
            price,
            description,
            release_date,
            is_mature,
            video,
            image:formData,
            developer,
            userId: sessionUser.id,
        };
        let newGame = await dispatch(create_game(game));

        // set all back to empty form field
        setTitle("");
        setPrice("");
        setDescription("");
        setRelease_Date("");
        setIs_Mature(false);
        setVideo([]);
        setImage([]);
        setDeveloper("");
        setHasSubmitted(false);

        if (newGame) {
            history.push("/");
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
          {/* prior to s3 integration */}
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
            Submit Game
          </button>
          {(imageLoading)&& <p>Loading...</p>}
        </form>
      </div>
    </>
  );
};

export default CreateGame;
