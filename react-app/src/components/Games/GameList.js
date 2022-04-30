import { get_all_games } from "../../store/game";
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from "react";


const Games = () => {
const dispatch = useDispatch()
const games = useSelector(state => Object.values(state.games))
useEffect(() => {
    dispatch(get_all_games())
}, [dispatch])
console.log(games)

return (
    <>
    <h1>{games?.map(game =>
        <p>{game.title}</p>
        )}</h1>
    </>
)

}

export default Games;
