import React, {useState} from 'react'
import {useHistory, useParams} from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { post_image } from '../../store/image';
import Box from '@mui/material/Box';
import LinearProgress from '@mui/material/LinearProgress';
import './Images.css'

const UploadPicture = () => {
    const histroy = useHistory(); //redirect after successful image
    const dispatch = useDispatch();
    const [image, setImage] = useState(null);
    const [imageLoading, setImageLoading] = useState(false);
    const{userId} = useParams()
    // console.log(userId)

    const handleSubmit = async(e) =>{
        e.preventDefault();
        const formData = new FormData();
        formData.append('image', image);
        // since aws is slow! We will display a message for users to know
        // it is uploading
        setImageLoading(true);

        await dispatch(post_image(formData, userId))

        setImageLoading(false)
    }

    const updateImage = (e) =>{
        const file = e.target.files[0];
        setImage(file);
    }


    return(
        <form onSubmit={handleSubmit}>
            <div>
                <h3>Update Profile Picture</h3>
            </div>
            <label for='profile-upload' className='choose-profile-image'>Upload Image</label>
            <input
                id='profile-upload'
                type='file'
                accept='image/*'
                onChange={updateImage}
            />
            <button type="submit" className='profile-image-input'>Submit Picture</button>
            {(imageLoading)&&
            <Box sx={{ width: '100%' }}>
                <LinearProgress />
            </Box>}
        </form>
    )
}

export default UploadPicture;
