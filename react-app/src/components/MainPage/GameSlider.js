import React, { useState } from 'react';
import Carousel from 'react-material-ui-carousel'
import { Link } from 'react-router-dom'

const GameSlider = ({games}) => {
  const [img, setImg] = useState();

  return (
    <div id='carousel'>
        <Carousel
            autoPlay={false}
            interval={4000}
            stopAutoPlayOnHover={true}
            animation="fade"
            indicators={true}
            duration={500}
            navButtonsAlwaysVisible={true}
            cycleNavigation={true}
            swipe={true}
        >
          {games.map(game => (
            <div key={game?.id}>
              <Link to={`/games/${game.id}`}>
            <div id='carousel_content'>
            <div id='game_img_main'><img className='game_image_main' id='game_image_main' src={game?.images[0]?.image}></img></div>
            <div>
            <div id='game_title'>{game?.title}</div>
            <div id='game_side_content'>
            <div>
            <div id='game_img_thumb1'><img id='game_image_thumb' src={game?.images[1]?.image}></img></div>
            <div id='game_img_thumb2'><img id='game_image_thumb' src={game?.images[2]?.image}></img></div>
            </div><div>
            <div id='game_img_thumb3'><img id='game_image_thumb' src={game?.images[3]?.image}></img></div>
            <div id='game_img_thumb4'><img id='game_image_thumb' src={game?.images[4]?.image}></img></div>
            <div>
            </div>
            </div>
            </div>
            <p>Now Available</p>
            {game.price}
            </div>
            </div>
            </Link>
            </div>
          ))}
        </Carousel>
    </div>
  )
}

export default GameSlider;
