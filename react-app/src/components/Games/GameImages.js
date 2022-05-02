import React, {useEffect} from "react";
import { get_all_game_images } from "../../store/gameImage";
import { useDispatch, useSelector } from "react-redux";

const GameImages = () =>{
    const dispatch = useDispatch()
    const gameImages = useSelector(state => Object.values(state.gameImages))
}
