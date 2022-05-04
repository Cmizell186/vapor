import React from 'react';
import Carousel from 'react-material-ui-carousel'
import { Paper, Button } from '@mui/material'

const GameSlider = ({games}) => {

  return (
    <div id='carousel'>
        <Carousel
            autoPlay={false}
            animation="fade"
            indicators={true}
            duration={500}
            navButtonsAlwaysVisible={true}
            navButtonsAlwaysInvisible={true}
            cycleNavigation={true}
            swipe={true}
            height="706px"
            width="918px"
            fullHeightHover={false}     // We want the nav buttons wrapper to only be as big as the button element is
            navButtonsProps={{          // Change the colors and radius of the actual buttons. THIS STYLES BOTH BUTTONS
                style: {
                    backgroundColor: 'cornflowerblue',
                    borderRadius: 0
                }
            }}
            navButtonsWrapperProps={{   // Move the buttons to the bottom. Unsetting top here to override default style.
                style: {
                    bottom: '0',
                    top: 'unset'
                }
            }}
            NextIcon='next'             // Change the "inside" of the next button to "next"
            PrevIcon='prev'             // Change the "inside of the prev button to "prev"
        >
          {games.map(game => (
            <div key={game?.id}>
            <div id='carousel_content'>
            <div id='game_img_main'><img id='game_image_main' src={game?.images[0]?.image}></img></div>
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

            </div>
          ))}
        </Carousel>
    </div>
  )
}

export default GameSlider;
