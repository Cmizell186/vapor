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

    useEffect(() => {
        dispatch(get_all_carts())
      }, [dispatch])

    return (
        <>
            <div id='search_container'>
                <div id="cart-button-div">
                    <Link to='/cart'>
                        <button type='button'>Cart ({user_cart.length})</button>
                    </Link>
                </div>
                <div id="search_div">
                    <input placeholder='search' id="search_input"></input>
                </div>
            </div>
        </>
    )

}

export default SearchBar;
