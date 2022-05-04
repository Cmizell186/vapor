import React, {useEffect, useState} from "react";
import { get_all_game_images, delete_specific_image } from "../../store/gameImage";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import './GameImages.css';

const GameImages = () =>{
    const dispatch = useDispatch()
    const gameImages = useSelector(state => Object.values(state.gameImages))
    const {gameId} = useParams()

    useEffect(() =>{
        dispatch(get_all_game_images(gameId))
    }, [dispatch])

    return (
        <div id="game-image-container">
            {gameImages?.map(img =>(
                <div key={img?.id}>
                    <img
                        src={img?.image}
                        width="150"
                        height="150"
                    />
                <button onClick={() => dispatch(delete_specific_image(gameId, img?.id))}>delete Image</button>
                </div>
            ))}
        </div>
    )
}

export default GameImages;
