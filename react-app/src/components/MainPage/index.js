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
                    <ul>
                        <li>GIFT CARDS</li>
                        <li>By Friends</li>
                        <li>by Curators</li>
                        <li>Tags</li>
                        <li>Recommendations</li>
                        <li>New Releases</li>
                        <li>Top sellers</li>
                        <li>New Releases</li>
                        <li>Upcoming</li>
                        <li>Specials</li>
                        <li>VR Titles</li>
                        <li>Controller-Friendly</li>
                        <li>BROWSE BY GENRE</li>
                        <li>Free to Play</li>
                        <li>Early Access</li>
                        <li>Action</li>
                        <li>Adventure</li>
                        <li>Casual</li>
                        <li>Indie</li>
                        <li>Massively Multiplayer</li>
                        <li>Racing</li>
                        <li>RPG</li>
                        <li>Simulation</li>
                        <li>Sports</li>
                        <li>Strategy</li>
                        <li>YOUR TAGS</li>
                        <li>Utilities</li>
                        <li>Programming</li>
                        <li>Software</li>
                        <li>MMORPG</li>
                        <li>Mature</li>
                        <li>Recently Viewed</li>
                        <li>recent</li>
                        <li>recent</li>
                        <li>recent</li>
                        <li>recent</li>
                    </ul>
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
        </div>
        </div>
        </div>
        </div>
        </div>
    )
}

export default Store;
