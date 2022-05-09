import React, { useState } from 'react';
import Carousel from 'react-material-ui-carousel'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from "react";
import { get_all_games } from "../../store/game";
import '../MainPage/index.css'

const SportsSlider = () => {
  const [index, setIndex] = useState(0);
  const [imageIndex, setImageIndex] = useState(0);
  const dispatch = useDispatch()
  const games = useSelector(state => Object.values(state.games))
  const ftpgames = games?.filter(games => games.tags.filter(tag => tag.genre_id === 11).length > 0)

  useEffect(() => {
    dispatch(get_all_games())
  }, [dispatch])


  return (
    <div id="content_sub_genre">
        <div id="main_content">
    <div id='carousel'>
      <div id='prev_button_div'>
        <div id='prev_button' onClick={() => {
          if(index === 0) return setIndex(9)
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
          {ftpgames?.map(game => (
            <div id='carousel_content_main' key={game?.id}>
              <Link to={`/games/${game?.id}`}>
            <div id='carousel_content'>
            <div id='game_img_main'><img alt=''
            className='game_image_main' id='game_image_main'
            src={game?.images[imageIndex]?.image}></img></div>

            <div id='game_info_div'>
            <div id='game_title'>{game?.title}</div>
            <div id='game_side_content'>
            <div>
            <div id='game_img_thumb1'><img alt='' id='game_image_thumb' onMouseEnter={(e) => {setImageIndex(1)}}
              onMouseLeave={(e) => {setImageIndex(0)}} src={game?.images[1]?.image}></img></div>

            <div id='game_img_thumb2'><img alt='' id='game_image_thumb' onMouseEnter={(e) => {setImageIndex(2)}}
              onMouseLeave={(e) => {setImageIndex(0)}} src={game?.images[2]?.image}></img></div>
            </div><div>
            <div id='game_img_thumb3'><img alt='' id='game_image_thumb' onMouseEnter={(e) => {setImageIndex(3)}}
              onMouseLeave={(e) => {setImageIndex(0)}} src={game?.images[3]?.image}></img></div>
            <div id='game_img_thumb4'><img alt='' id='game_image_thumb' onMouseEnter={(e) => {setImageIndex(4)}}
              onMouseLeave={(e) => {setImageIndex(0)}} src={game?.images[4]?.image}></img></div>
            <div>
            </div>
            </div>
            </div>
            <div id='game_info_content_carousel'>
            <p>Now Available</p>
            <div id='game_info_content_price'>
            ${game?.price}
            <div id='platform_carousel'><img id='platform' src='/static/images/vapor_logo_grey.png' alt='' /></div>
            </div>
            </div>
            </div>
            </div>
            </Link>
            </div>
          ))}
        </Carousel>
        <div id='next_button_div'>
        <div id='next_button' onClick={() => {
          if ( 9 === index) return setIndex(0)
          return setIndex(i => i + 1)
          }}><img src='/static/images/rightarrow.png' alt='' /></div>
      </div>
    </div>
    </div>
  </div>
  )
}

export default SportsSlider;
