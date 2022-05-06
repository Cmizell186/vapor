import { get_all_carts } from '../store/cart'
import '../../src/components/LandingPage/index.css'
import { Link } from 'react-router-dom'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

const SearchBar = () => {
    const sessionUser = useSelector((state) => state.session.user);
    const dispatch = useDispatch();
    const cart_entries = useSelector(state => Object.values(state.carts))
    const user_cart = cart_entries.filter(entry => entry.user_id === sessionUser.id && !entry.is_owned)
    // nice work man ! <3
    useEffect(() => {
        dispatch(get_all_carts())
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
