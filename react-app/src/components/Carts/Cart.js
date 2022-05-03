import { get_all_carts } from '../../store/cart'
import { useDispatch, useSelector } from 'react-redux'
import React, { useEffect } from 'react';
import './index.css'
const Cart = () => {
  const sessionUser = useSelector((state) => state.session.user);
  const dispatch = useDispatch();
  // cart_entries is an array with all entries
  const cart_entries = useSelector(state => Object.values(state.carts))
  // user_cart is an array with only the not owned games
  const user_cart = cart_entries.filter(entry => entry.user_id === sessionUser.id && !entry.is_owned)

  useEffect(() => {
    dispatch(get_all_carts())
  }, [dispatch])

  // <p>{entry.user_id} <span>{entry.game_id}</span></p>
  // <p>{entry.game.description}</p>
  return (
    <div className='whole-page'>
      <div className='main-page-div'>
        <div className='header-content'>
          <h2>YOUR SHOPPING CART</h2>
        </div>
        <div className='main-page-content'>
          <div className='left-content'>
            {user_cart?.map(entry =>
              <div key={entry.game_id}>
                <p>{entry.game.title}</p>
              </div>
            )}
          </div>
          <div className="right-content">
            <div className="right-content-divs">palceholder</div>
            <div className="right-content-divs">palceholder</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Cart;
