import React, {useEffect, useState} from "react";
import { get_all_game_images, delete_specific_image } from "../../store/gameImage";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import Carousel from 'react-material-ui-carousel'
import './GameImages.css';
import DeleteImageModal from "./ImageDeleteModal";

const GameImages = () =>{
    const dispatch = useDispatch()
    const gameImages = useSelector(state => Object.values(state.gameImages))
    const {gameId} = useParams()

    useEffect(() =>{
        dispatch(get_all_game_images(gameId))
    }, [dispatch])

    return (
        <div id="game-image-container">
        <Carousel
            autoPlay={false}
            navButtonsAlwaysVisible={true}
        >
            {gameImages?.map(img =>(
                <div key={img?.id} className='image-item'>
                    <img
                        src={img?.image}
                        width="150"
                        height="150"
                        />
                <DeleteImageModal gameId={gameId} photoId={img?.id}/>
                </div>
            ))}
        </Carousel>
        </div>

    )
}

export default GameImages;
