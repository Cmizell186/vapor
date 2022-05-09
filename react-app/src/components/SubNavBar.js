import { get_all_carts } from '../store/cart'
import '../../src/components/LandingPage/index.css'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { get_one_image } from '../store/image'

const SearchBar = () => {
    const sessionUser = useSelector((state) => state.session.user);
    const dispatch = useDispatch();
    const cart_entries = useSelector(state => Object.values(state.carts))
    const user_cart = cart_entries.filter(entry => entry.user_id === sessionUser.id && !entry.is_owned)
    const userImage = useSelector(state => Object.values(state.images))
    const pfp = userImage[0];
    // nice work man ! <3
    // thank you <3
    useEffect(() => {
        dispatch(get_all_carts())
        dispatch(get_one_image(sessionUser?.id))
      }, [dispatch])

    return (
        <>
            <div id='search_container'>
                <div id="search_container_div">
                <div id="cart-button-div">
                    <div id='cart_link'>
                        <a href='/cart'>
                        {(user_cart.length ? `Cart (${user_cart.length})` : "Cart" )}
                        </a>
                    </div>
                </div>
                <div id="search_div">
                <div id='search_bar_extra_div'>
                <div id='search_bar_profilepic_div'>
                <img src={pfp?.image} id="profile_pic_search_bar" alt="" />
                </div>
                <div id='search_bar_welcome_msg'>
                <img alt='' id='plus' src='/static/images/new_white.svg'></img>
                </div>
                 Welcome {sessionUser?.username} to Vapor Games !
                </div>
                    <input placeholder='search' id="search_input"></input>
                    <a id="blank_link" href='/library'>
                        <img alt='' id='blank_search' src="/static/images/blank.png"/>
                    </a>
                </div>
                </div>
            </div>
        </>
    )

}

export default SearchBar;
