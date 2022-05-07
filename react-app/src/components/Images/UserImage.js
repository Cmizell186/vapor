import React, {useEffect} from 'react';
import { get_one_image } from '../../store/image';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import "./Images.css"
const SingleImage = () =>{
    const dispatch = useDispatch()
    const {userId} = useParams()
    const images = useSelector(state => Object.values(state.images))
    const userImage = images.filter(img => img.user_id === +userId)[0]
    useEffect(()=>{
        dispatch(get_one_image(userId))
    }, [dispatch])

    return (
        <div className='profile-single-image-container'>
            <div className='profile-single-image'>
                <img alt='' src={userImage?.image}  width="150" height="150" />
            </div>
        </div>
    )
}

export default SingleImage
