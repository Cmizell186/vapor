import React, {useEffect, useState} from "react";
import { get_all_game_images, delete_specific_image } from "../../store/gameImage";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import Carousel from 'react-material-ui-carousel'
import './GameImages.css';
import DeleteImageModal from "./ImageDeleteModal";
import ArrowBackIosNew from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIos from "@mui/icons-material/ArrowForwardIos";

const GameImages = () =>{
    const dispatch = useDispatch()
    const gameImages = useSelector(state => Object.values(state.gameImages))
    const {gameId} = useParams()

    useEffect(() =>{
        dispatch(get_all_game_images(gameId))
    }, [dispatch])

    return (
        <div id="game_image_container">
        <Carousel
            autoPlay={false}
            navButtonsAlwaysVisible={true}
            animation="fade"
            width="500px"
            NextIcon={<ArrowForwardIos/>}
            PrevIcon={<ArrowBackIosNew/>}
            cycleNavigation={false}
            height="255px"
            swipe={false}
            indicators={true}
            timeout={200}
            key={gameImages.length}
        >
            {gameImages?.map(img =>(
                <>
                <div key={img?.id} id='image_item'>
                    <img
                        src={img?.image}
                        id='delete_item_image'
                        />
                </div>
                <div id="delete_image_div">
                <DeleteImageModal gameId={gameId} photoId={img?.id}/>
                </div>
            </>
            ))}
        </Carousel>
        </div>

    )
}

export default GameImages;
