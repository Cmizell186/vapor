import React from 'react';
import Carousel from 'react-material-ui-carousel'
import { Paper, Button } from '@mui/material'

const GameSlider = ({games}) => {

  return (
    <>
        <Carousel>
          {games.map(game => (
            game?.title
          ))}
        </Carousel>
    </>
  )
}

export default GameSlider;
