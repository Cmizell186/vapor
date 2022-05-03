import { get_all_carts } from '../../store/cart'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from "react-router-dom";
import React, { useEffect, useState } from 'react';

const Cart = () => {
  const sessionUser = useSelector((state) => state.session.user);
  const dispatch = useDispatch();
  const cart_entries = useSelector(state => Object.values(state.carts))
  const user_cart = cart_entries.filter(entry => entry.user_id === sessionUser.id && !entry.is_owned)

  useEffect(() => {
    dispatch(get_all_carts())
  }, [dispatch])

  return (
    <div>
      {user_cart?.map(entry =>
        <p>{entry.user_id} <span>{entry.game_id}</span></p>
        )}
    </div>
  )
}

export default Cart;
