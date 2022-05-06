import { delete_cart, update_cart } from '../../store/cart'
import { useDispatch, useSelector } from 'react-redux'
import { get_all_games } from '../../store/game';
import React, { useState, useEffect } from 'react';
import './index.css'
import { Link } from 'react-router-dom';
import { Modal } from "../../context/Modal"
import Carousel from 'react-material-ui-carousel';

const Cart = () => {
  const sessionUser = useSelector((state) => state.session.user);
  const [wasDeleted, setWasDeleted] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const dispatch = useDispatch();

  const games = useSelector(state => Object.values(state.games))
  // cart_entries is an array with all entries
  const cart_entries = useSelector(state => Object.values(state.carts))
  // user_cart is an array with only the not owned games
  const user_cart = cart_entries.filter(entry => entry.user_id === sessionUser.id && !entry.is_owned)

  let total = 0.00;
  user_cart.forEach(entry => total += entry?.game?.price)
  // console.log(total)

  // const games = useSelector(state => Object.values(state.games))

  // const firstGame = games[Math.floor(Math.random() * games.length - 1)]
  // const secondGame = games[Math.floor(Math.random() * games.length - 1)]
  // console.log(Math.floor(Math.random() * games.length))

  useEffect(() => {
    dispatch(get_all_games())
  }, [dispatch])


  const removeCartItem = (id) => {
    setWasDeleted(true)
    dispatch(delete_cart(id))
  }

  const handlePurchaseCart = () => {
    // console.log(user_cart)
    if (user_cart.length) {
      dispatch(update_cart(user_cart))
      return setShowModal(true)
    }
  }

  return (
    <>
      <div className='whole-page'>
        {showModal && (
          <Modal onClose={() => setShowModal(false)}>
            <div id="after-purchase-modal-div">
              <div id='item-in-purchase-title' className='item-in-purchase-modal'>Thank you for your purchase!</div>
              <div className='item-in-purchase-modal'>Click the bottom button to view </div>
              <div id="item-in-purchase-button" className='item-in-purchase-modal'><Link to='/library'>View library</Link></div>
            </div>


          </Modal>
        )}
        <div className='main-page-div'>
          <div className='header-content'>
            <div className='extra-links'>
              <Link id="products-link" to={'/games'}>All Products</Link> {'>'} Your Shopping Cart
            </div>
            <h2>YOUR SHOPPING CART</h2>
          </div>
          <div className='main-page-content'>
            <div className='left-content'>
              {wasDeleted && <div id="removed-cart-item">Your item has been removed!</div>}
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
                <img alt=''
                  src="https://cdn.akamai.steamstatic.com/steam/apps/468920/header.jpg?t=1651602622"
                // src={`${firstGame?.images[0]}`}
                />
                <div className='inside-div'></div>
              </div>
              <div className="right-content-divs">
                <img alt='' src='https://cdn.akamai.steamstatic.com/steam/apps/470310/header.jpg?t=1650008969' />
                <div className='inside-div'></div>
              </div>
              <div id="cart-carousel-outside-div">
                <Carousel
                  autoPlay={false}
                  interval={4000}
                  stopAutoPlayOnHover={true}
                  cycleNavigation={true}
                  animation="fade"
                  duration={500}
                  indicators={true}
                  swipe={true}
                >
                  {games.length && games.map(game => (
                    // <img alt='' src={`${games?.images[0]?.image}`} />
                    <>
                      <p>{game?.title}</p>
                      <p>hello</p>
                      <img alt='' src={`${game?.images[0]?.image}`} />
                      </>
                  ))}
                    </Carousel>

              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Cart;
