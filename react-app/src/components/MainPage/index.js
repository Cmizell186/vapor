import { get_all_games } from "../../store/game";
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from "react";
import GameSlider from "./GameSlider";
import './index.css'
import SearchBar from "../SubNavBar";

const Store = ({user}) => {

    const dispatch = useDispatch()
    const games = useSelector(state => Object.values(state.games))
    useEffect(() => {
      dispatch(get_all_games())
    }, [dispatch])

    return (
        <div id="main">
            <div id="header_content">
            <div id="jason_div_video">
            <SearchBar />
            <video id="going_rogue_video" autoPlay={true} muted width="1140" loop>
                <source src="/videos/webm_gr_page_bg_english.webm" type="video/webm" loop/>
                <source src="/videos/webm_gr_page_bg_english.webm" type="video/mp4"/>
                Sorry, your browser doesn't support embedded videos.
            </video>
            </div>
            </div>
            <div id="main_page">
            <div id="main_page_content">
            <div id="sidebar_nav">
                <div id="sidebar_nav_list">
                        <img alt="" src="/images/vaporcards_promo.png" />
                        <div>GIFT CARDS</div>
                        <div>Now Available on Vapor</div>
                        <div>BROWSE BY GENRE</div>
                        <div>Free to Play</div>
                        <div>Early Access</div>
                        <div>Action</div>
                        <div>Adventure</div>
                        <div>Casual</div>
                        <div>Indie</div>
                        <div>Massively Multiplayer</div>
                        <div>Racing</div>
                        <div>RPG</div>
                        <div>Simulation</div>
                        <div>Sports</div>
                        <div>Strategy</div>
                </div>
            </div>
        <div id="content">
        <div id="main_content">
            <div id="feature">
            FEATURED & RECOMMENDED
            </div>
        <GameSlider games={games} />
        <div id="sub_main_content">
            SPECIAL OFFERS
            game1/2/3/4
        </div>
        <div id="console_wrap">
        <div id="vapor_deck_div">
        </div>

        <div id="vapor_index_div">
        </div>
        </div>
        </div>
        </div>

        </div>

        </div>

        </div>
    )
}

export default Store;
