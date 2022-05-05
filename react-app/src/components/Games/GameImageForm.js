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

    return (
        <form onSubmit={handleSubmit} id='new-image-game-form'>
            <div>
                <h3 className="delete-image-text">For best results use images with 616x353 dimensions</h3>
            </div>
            <div className="input-image-div">
            <label for='image-upload' className="choose-image">Upload Image</label>
            <input
                id='image-upload'
                type='file'
                accept="image/*"
                onChange={updateImage}
                />
            </div>
            <div className="submit-image-div">
                <button type="submit" className='submit-image'>Submit Picture</button>
            </div>
            {(imageLoading)&&
            <Box sx={{ width: '100%' }}>
                <LinearProgress />
            </Box>}
        </form>
    )
}
export default UploadGamePicture;
