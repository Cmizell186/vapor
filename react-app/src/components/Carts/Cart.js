import { get_all_carts, delete_cart, update_cart } from '../../store/cart'
import { useDispatch, useSelector } from 'react-redux'
import React, { useEffect, useState } from 'react';
import SearchBar from '../SubNavBar'
import './index.css'
import { Link } from 'react-router-dom';
const Cart = () => {
  const sessionUser = useSelector((state) => state.session.user);
  const dispatch = useDispatch();
  // cart_entries is an array with all entries
  const cart_entries = useSelector(state => Object.values(state.carts))
  // user_cart is an array with only the not owned games
  const user_cart = cart_entries.filter(entry => entry.user_id === sessionUser.id && !entry.is_owned)

  let total = 0.00;
  user_cart.forEach(entry => total += entry?.game?.price)
  // console.log(total)

  const removeCartItem = (id) => {
    dispatch(delete_cart(id))
  }

  const handlePurchaseCart = () => {
    // console.log(user_cart)
    if(user_cart.length) {
      dispatch(update_cart(user_cart))
    }
  }

  return (
    <>
    <div className='whole-page'>
    <div className='main-page-div'>
    <div className='header-content'>
          <div className='extra-links'>
          <Link id="products-link" to={'/games'}>All Products</Link> {'>'} Your Shopping Cart
          </div>
          <h2>YOUR SHOPPING CART</h2>
        </div>
        <div className='main-page-content'>
          <div className='left-content'>
            {user_cart?.map(entry =>
              <div className='cart-item-container' key={entry.game_id}>
                <div className="cart-li-image">
                  <a href={`/games/${entry?.game_id}`}>
                    <img alt='game' src={entry?.game?.images[0]?.image} />
                  </a>
                </div>
                <div className="cart-item-desc">
                  <p>{entry.game.title}</p>
                  <div className='cart-item-price-remove'>
                    <p>{entry.game.price}</p>
                    <span onClick={() => removeCartItem(entry.id)}>Remove</span>
                  </div>
                </div>
              </div>
            )}
            <div id="total-div-container">
              <div id="total-price-items">
                <p>Estimated Total</p>
                <p>{total ? `$${total}` : '$0.00'}</p>
              </div>
              <div id="total-div-price-checkout">
                <p>Thank you for choosing steam. Select button bellow to checkout</p>
              </div>
              <div id="total-div-actions">
                <span id={user_cart.length ? 'is-active-total-bttns' : ''} onClick={handlePurchaseCart}>Purchase</span>
                {/* <span>maybe delete</span> */}
              </div>
            </div>
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
