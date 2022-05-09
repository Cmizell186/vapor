import React,{useState} from "react";
import { useDispatch } from "react-redux";
import { useHistory, useParams } from "react-router-dom";
import {add_new_image} from '../../store/gameImage.js';
import Box from '@mui/material/Box';
import LinearProgress from '@mui/material/LinearProgress';
import './GameImages.css';
const UploadGamePicture = () =>{
    const history = useHistory(); //redirect after uploading image
    const dispatch = useDispatch();
    const [image, setImage] = useState(null);
    const [imageLoading, setImageLoading] = useState(false);
    const {gameId} = useParams();


    const handleSubmit = async(e) =>{
        e.preventDefault();
        const formData = new FormData();
        formData.append('image', image);


        // since aws is slow! We will display a message for users to know
        // it is uploading
        setImageLoading(true);


        await dispatch(add_new_image(formData, gameId))

        setImageLoading(false);
    }

    const updateImage = (e) =>{
        const file = e.target.files[0];
        setImage(file);
    }
    const loaded = () => {
        alert("File was selected.")
    }

    return (
    <div id="upload_submit_form">
        <form onSubmit={handleSubmit} id='new-image-game-form'>
          <h4 className="delete-image-text">For best results use images with 616x353 dimensions.</h4>
            <div id="delete_image_buttons">
            <label for='image-upload' onLoadedMetadata={loaded} className="choose-image">Upload a New Image</label>
            <input
                id='image-upload'
                type='file'
                accept="image/*"
                onChange={updateImage}
                />
                <button type="submit" className='submit-image'>Submit Picture</button>
            </div>
            {(imageLoading)&&
            <Box sx={{ width: '100%' }}>
                <LinearProgress />
            </Box>}
        </form>
    </div>
    )
}
export default UploadGamePicture;
