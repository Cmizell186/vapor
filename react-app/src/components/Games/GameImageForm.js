import React,{useState} from "react";
import { useHistory } from "react-router-dom";

const UploadPicture = () =>{
    const history = useHistory(); //redirect after uploading image
    const [image, setImage] = useState(null);
    const [imageLoading, setImageLoading] = useState(false);


    const handleSubmit = async(e) =>{
        e.preventDefault();
        const formData = new FormData();
        formData.append("img", image);

        // aws is slow! we will show a loading message for users to not get too worried!
        setImageLoading(true);

        const res = await fetch('/api/games', {
            method: "POST",
            body: formData,
        })

        // if (res.ok){

        // }

    }

    return (
        <form onSubmit={handleSubmit}>
            <input
                type='file'
                accept="image/*"
                onChange={updateImage}
            />
            {(imageLoading)&& <p>Loading...</p>}
        </form>
    )
}
