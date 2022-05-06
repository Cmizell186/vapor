import { get_all_games } from "../../store/game";
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from "react";
import './index.css'


const Library = ({user}) => {
  const dispatch = useDispatch()
  const games = useSelector(state => Object.values(state.games))
  const cart_entries = useSelector(state => Object.values(state.carts))
  const user_games = cart_entries
    .filter(entry => entry.user_id === user.id && entry.is_owned)
    .map(game => game.game)

  useEffect(() => {
    dispatch(get_all_games())
  }, [dispatch])
  //{game?.tags.map(tag => tag.genres.title).join(", ")}
  const DATE_OPTIONS = { year: 'numeric', month: 'short', day: 'numeric' };
// {new Date(game?.release_date).toLocaleDateString('en-US', DATE_OPTIONS)}
// 6th picture? should be 600x900
  return (
    <>
    <div id="library_container">
    <div id="library_content">
    <div id="library">
    {user_games?.map(game =>
    <div className="games" key={game?.id}>
    <div id="game_tile">
    <a href={`/games/${game.id}`}>
    <div class="game"><img src={game?.images[5]?.image} alt="" /></div>
    <div id="library_game_title_div">
        <div id="library_game_title">
        {game?.title}
        </div>
    </div>
    </a>
    </div>
    </div>
)}
</div>
</div>
</div>
</>
  )
}

export default Library;
