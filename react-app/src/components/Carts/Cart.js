import { get_all_carts, delete_cart } from '../../store/cart'
import { useDispatch, useSelector } from 'react-redux'
import React, { useEffect } from 'react';
import SearchBar from '../SubNavBar'
import './index.css'
const Cart = () => {
  const sessionUser = useSelector((state) => state.session.user);
  const dispatch = useDispatch();
  // cart_entries is an array with all entries
  const cart_entries = useSelector(state => Object.values(state.carts))
  // user_cart is an array with only the not owned games
  const user_cart = cart_entries.filter(entry => entry.user_id === sessionUser.id && !entry.is_owned)

  // useEffect(() => {
  //   dispatch(get_all_carts())
  // }, [dispatch])

  const removeCartItem = (id) => {
    // TODO SEND TO DISPATCH TO DELETE FROM LIBRARY
    dispatch(delete_cart(id))
  }
  // entry.game.images[0]
  // console.log(user_cart[0].game.images[0].image)

  // <p>{entry.user_id} <span>{entry.game_id}</span></p>
  // <p>{entry.game.description}</p>
  return (
    <>
    <div className='whole-page'>
    <div className='main-page-div'>
    <SearchBar />
    <div className='header-content'>
          <h2>YOUR SHOPPING CART</h2>
        </div>
        <div className='main-page-content'>
          <div className='left-content'>
            {user_cart?.map(entry =>
              <div className='cart-item-container' key={entry.game_id}>
                <div class="cart-li-image">
                  <a>
                    <img alt='' src={entry?.game?.images[0]?.image} />
                  </a>
                </div>
                <div className="cart-item-desc">
                  <p>{entry.game.title}</p>
                  <div className='cart-item-price-remove'>
                    <p>{entry.game.price}</p>
                    <a href='#' onClick={() => removeCartItem(entry.id)}>Remove</a>
                  </div>
                </div>
              </div>
            )}
          </div>
          <div className="right-content">
            <div className="right-content-divs">
            <img alt='' src="https://cdn.akamai.steamstatic.com/steam/apps/468920/header.jpg?t=1651602622" /></div>
            <div className="right-content-divs">
              <img alt='' src='https://cdn.akamai.steamstatic.com/steam/apps/470310/header.jpg?t=1650008969' />
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default Cart;
