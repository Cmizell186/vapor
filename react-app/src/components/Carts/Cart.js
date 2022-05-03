import { get_all_carts } from '../../store/cart'
import { useDispatch, useSelector } from 'react-redux'
import React, { useEffect } from 'react';

const Cart = () => {
  const sessionUser = useSelector((state) => state.session.user);
  const dispatch = useDispatch();
  const cart_entries = useSelector(state => Object.values(state.carts))
  const user_cart = cart_entries.filter(entry => entry.user_id === sessionUser.id && !entry.is_owned)

  useEffect(() => {
    dispatch(get_all_carts())
  }, [dispatch])

  // <p>{entry.user_id} <span>{entry.game_id}</span></p>
  return (
    <div>
      {user_cart?.map(entry =>
        <div key={entry.game_id}>
          <p>{entry.game.title}</p>
          <p>{entry.game.description}</p>
        </div>
      )}
    </div>
  )
}

export default Cart;
