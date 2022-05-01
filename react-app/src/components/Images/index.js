import React, {useState} from 'react'
import {useHistory} from 'react-router-dom';

const UploadPicture = () => {
    const histroy = useHistory(); //redirect after successful image
    const [image, setImage] = useState(null);
    const [imageLoading, setImageLoading] = useState(false);

    const handleSubmit = async(e) =>{
        e.preventDefault();
        const formData = new FormData();
        formData.append('image', image);

        // since aws is slow! We will display a message for users to know
        // it is uploading
        setImageLoading(true);

        const res = await fetch('/api/images',{
            method: "POST",
            body: formData,
        });

        if(res.ok){
            await res.json();
            setImageLoading(false);
            histroy.push('/')
        } else {
            setImageLoading(false);
            console.log('error!!!! YOU MESSED UP!')
        }
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
