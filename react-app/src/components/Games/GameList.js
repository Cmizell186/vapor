import { get_all_games } from "../../store/game";
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from "react";


const Games = () => {
const dispatch = useDispatch()
const games = useSelector(state => Object.values(state.games))
useEffect(() => {
    dispatch(get_all_games())
}, [dispatch])

const DATE_OPTIONS = { year: 'numeric', month: 'short', day: 'numeric' };

return (
    <>
    {games?.map(game =>
    <div key={game.id}>
        <h2>{game.title}</h2>
        <p>{game.description}</p>
        <p>{game.price}</p>
        <p>{new Date(game.release_date).toLocaleDateString('en-US', DATE_OPTIONS)}</p>
        <p>{game.is_mature}</p>
        <p>{game.video}</p>
        <p>{game.img}</p>
        <p>{game.developer}</p>
    </div>
        )}
    </>
)

}

export default Games;
