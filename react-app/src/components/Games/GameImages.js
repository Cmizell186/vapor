import React, {useEffect} from "react";
import { get_all_game_images } from "../../store/gameImage";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";

const GameImages = () =>{
    const dispatch = useDispatch()
    const gameImages = useSelector(state => Object.values(state.gameImages))
    const {gameId} = useParams()
    console.log(gameImages)

    useEffect(() =>{
        dispatch(get_all_game_images(gameId))
    }, [dispatch])

    return (
        <>
            {gameImages?.map(img =>(
                <div key={img?.id}>
                    <img
                        src={img?.image}
                        width="500"
                        height="500"
                    />
                </div>
            ))}
        </>
    )
}

export default GameImages;
