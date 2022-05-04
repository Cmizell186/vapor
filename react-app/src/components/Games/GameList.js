import { get_all_games } from "../../store/game";
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import './styles.css'
// swiper bundle styles

import 'swiper/swiper-bundle.min.css'

import { Pagination, Navigation } from "swiper";

// // swiper core styles
// import 'swiper/swiper.min.css'

// // modules styles
// import 'swiper/components/navigation/navigation.min.css'
// import 'swiper/components/pagination/pagination.min.css'


const Games = () => {
  const dispatch = useDispatch()
  const games = useSelector(state => Object.values(state.games))
  useEffect(() => {
    dispatch(get_all_games())
  }, [dispatch])

  const DATE_OPTIONS = { year: 'numeric', month: 'short', day: 'numeric' };

  return (
    <div>
      <video autoplay="true" muted width="1140" loop>
        <source src="/videos/webm_gr_page_bg_english.webm"
                type="video/webm" loop/>

        <source src="/videos/webm_gr_page_bg_english.webm"
                type="video/mp4"/>

        Sorry, your browser doesn't support embedded videos.
      </video>

    <Swiper
    slidesPerView={1}
    spaceBetween={30}
    loop={true}
    pagination={{
      clickable: true,
    }}
    navigation={true}
    modules={[Pagination, Navigation]}
    className="mySwiper"
    >
    <SwiperSlide><img src="/images/vapor_logo.png" id="logo" alt=""></img></SwiperSlide>
    <SwiperSlide><img src="/images/vapor_logo.png" id="logo" alt=""></img></SwiperSlide>
    <SwiperSlide><img src="/images/vapor_logo.png" id="logo" alt=""></img></SwiperSlide>
    <SwiperSlide>Slide 4</SwiperSlide>
    ...
    </Swiper>
    </div>
  )
}

export default Games;

// <>
// {games?.map(game =>
//     <div key={game?.id}>
//         <h2>{game?.title}</h2>
//         <p>{game?.description}</p>
//         <p>{game?.price}</p>
//         <p>{new Date(game?.release_date).toLocaleDateString('en-US', DATE_OPTIONS)}</p>
//         <p>{game?.is_mature}</p>
//         <p>{game?.video}</p>
//         <p>{game?.img}</p>
//         <p>{game?.developer}</p>
//     </div>
// )}
// </>
