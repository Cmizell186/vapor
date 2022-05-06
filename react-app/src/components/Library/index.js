import { get_all_games } from "../../store/game";
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from "react";
import './index.css'


const Library = () => {
  const dispatch = useDispatch()
  const games = useSelector(state => Object.values(state.games))
  useEffect(() => {
    dispatch(get_all_games())
  }, [dispatch])

  const DATE_OPTIONS = { year: 'numeric', month: 'short', day: 'numeric' };
// {new Date(game?.release_date).toLocaleDateString('en-US', DATE_OPTIONS)}
  return (
    <div id="library">
{games?.map(game =>
    <div className="games" key={game?.id}>
    <div class="game"><img src={game?.images[0]?.image} alt="" /></div>
    <div class="game"><img src="https://steamcdn-a.akamaihd.net/steam/apps/39140/library_600x900.jpg" alt="" /></div>
    </div>
)}
</div>
  )
}

export default Library;
