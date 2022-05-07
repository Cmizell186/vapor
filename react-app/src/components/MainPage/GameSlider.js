import React, { useState } from 'react';
import Carousel from 'react-material-ui-carousel'
import { Link } from 'react-router-dom'

const GameSlider = ({games}) => {
  const [index, setIndex] = useState(0);


  return (
    <div id='carousel'>
      <div id='prev_button_div'>
        <div id='prev_button' onClick={() => {
          if(index === 0) return setIndex(games?.length - 1)
          return setIndex(i => i - 1)
          }}><img src='/static/images/leftarrow.png' alt='' /></div>
        </div>
        <Carousel
            autoPlay={true}
            interval={7000}
            stopAutoPlayOnHover={true}
            cycleNavigation={true}
            animation="fade"
            duration={500}
            indicators={true}
            navButtonsAlwaysInvisible={true}
            IndicatorIcon={<div id="rectangle_active"></div>}
            indicatorIconButtonProps={{
              style: {
                display: "inline-block",
                margin: "12px 2px",
                width: "15px",
                height: "9px",
                borderRadius: "2px",
                transition: "background-color 0.2s",
                backgroundColor: "#FFFFFF33",
                cursor: "pointer",
              }
            }}
            activeIndicatorIconButtonProps={{
              style: {
                  backgroundColor: "#ffffff"
                }
            }}
            swipe={true}
            height={"354px"}
            index={index}
        >
          {games.slice(0, 10).map(game => (
            <div id='carousel_content_main' key={game?.id}>
              <Link to={`/games/${game?.id}`}>
            <div id='carousel_content'>
            <div id='game_img_main'><img alt='' className='game_image_main' id='game_image_main' src={game?.images[0]?.image}></img></div>
            <div id='game_info_div'>
            <div id='game_title'>{game?.title}</div>
            <div id='game_side_content'>
            <div>
            <div id='game_img_thumb1'><img alt='' id='game_image_thumb' src={game?.images[1]?.image}></img></div>
            <div id='game_img_thumb2'><img alt='' id='game_image_thumb' src={game?.images[2]?.image}></img></div>
            </div><div>
            <div id='game_img_thumb3'><img alt='' id='game_image_thumb' src={game?.images[3]?.image}></img></div>
            <div id='game_img_thumb4'><img alt='' id='game_image_thumb' src={game?.images[4]?.image}></img></div>
            <div>
            </div>
            </div>
            </div>
            <p>Now Available</p>
            ${game?.price}
            </div>
            </div>
            </Link>
            </div>
          ))}
        </Carousel>
        <div id='next_button_div'>
        <div id='next_button' onClick={() => {
          if (games?.length - 1 === index) return setIndex(0)
          return setIndex(i => i + 1)
          }}><img src='/static/images/rightarrow.png' alt='' /></div>
      </div>
    </div>
  )
}

export default GameSlider;
