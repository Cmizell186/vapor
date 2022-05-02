import React,{useState} from "react";
import { useDispatch } from "react-redux";
import { useHistory, useParams } from "react-router-dom";
import {add_new_image} from '../../store/gameImage.js';

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
        // formData.append('game_id', gameId)

        // since aws is slow! We will display a message for users to know
        // it is uploading
        setImageLoading(true);
        dispatch(add_new_image(formData))

        // const res = await fetch(`/api/images/game`, {
        //     method: "POST",
        //     body: formData,
        // })
        // let data = {body:formData, id:gameId}


        if(res.ok){
            await res.json();
            setImageLoading(false);
        } else {
            setImageLoading(false);
            console.log('error!!!! YOU MESSED UP!')
        }
    }

    const updateImage = (e) =>{
        const file = e.target.files[0];
        setImage(file);
    }

    return (
        <form onSubmit={handleSubmit}>
            <input
                type='file'
                accept="image/*"
                onChange={updateImage}
            />
            <button type="submit">Submit Picture</button>
            {(imageLoading)&& <p>Loading...</p>}
        </form>
    )
}
export default UploadGamePicture;
