import React, {useEffect} from 'react'
import { get_all_images } from '../../store/image';
import { useDispatch, useSelector } from 'react-redux';


const Images = () =>{
    const dispatch = useDispatch()
    const images = useSelector(state => Object.values(state.images))

    useEffect(() =>{
        dispatch(get_all_images())
    }, [dispatch])

    return (
        <>
        {images?.map(image =>(
            <div key={image?.id}>
                <img
                    src={image?.image}
                    width="500"
                    height="500"
                    alt=''
                >
                </img>
            </div>
        ))}
        </>
    )
}

export default Images
