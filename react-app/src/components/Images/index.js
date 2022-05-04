import React, {useState} from 'react'
import {useHistory, useParams} from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { post_image } from '../../store/image';

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
            <input
                type='file'
                accept='image/*'
                onChange={updateImage}
            />
            <button type="submit">Submit Picture</button>
            {(imageLoading)&& <p>Loading...</p>}
        </form>
    )
}

export default UploadPicture;
