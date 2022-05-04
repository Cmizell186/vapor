const LOAD_ALL_CARTS = 'carts/GET'
const LOAD_ONE_CART = 'carts/GET_ONE'
const CREATE_CART = 'carts/CREATE'
const UPDATE_CART = 'carts/UPDATE'
const DELETE_CART = 'carts/DELETE'

const all_carts = (carts) => ({
  type: LOAD_ALL_CARTS,
  carts
})

const get_one = (cart) => ({
  type: LOAD_ONE_CART,
  cart
})

const create = (cart) => ({
  type: CREATE_CART,
  cart
})

const update = (cart) => ({
  type: UPDATE_CART,
  cart
})

const remove = (id) => ({
  type: DELETE_CART,
  cart_id: id
})

export const get_all_carts = () => async (dispatch) => {
  const response = await fetch("/api/carts")
  if (response.ok) {
    const carts = await response.json()
    dispatch(all_carts(carts.carts))
  } else {
    return "ERROR AT GET_ALL_CARTS THUNK"
  }
}

export const create_cart = (cart) => async (dispatch) => {
  const response = await fetch("/api/carts", {
    method: "POST",
    headers: {
      'Accept': 'application/json',
      'content-type': 'application/json',
    },
    body: JSON.stringify(cart)
  })
  if (response.ok) {
    const cart = await response.json()
    dispatch(create(cart))
  } else {
    return "ERROR AT CREATE_CART THUNK"
  }
}

export const update_cart = (cart) => async (dispatch) => {
  const response = await fetch(`/api/carts/${cart.id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(cart)
  })
  if (response.ok) {
    const data = await response.json()
    const updated_cart = data.cart
    dispatch(update(updated_cart))
  } else {
    return "ERROR AT UPDATE_CART THUNK"
  }
}

export const delete_cart = (id) => async (dispatch) => {
  const current_cart = await fetch(`/api/carts/${id}`, {
    method: "DELETE",
  })
  if (current_cart.ok) {
    dispatch(remove(id))
  } else {
    return "ERROR AT DELETE_CART THUNK"
  }
}

const cart_reducer = (state = {}, action) => {
  let newState;
  switch (action.type) {
    case LOAD_ALL_CARTS:
      newState = {}
      // action.carts.forEach((cart) => newState[`${cart.user_id},${cart.game_id}`] = cart)
      action.carts.forEach((cart) => newState[cart.id] = cart)
      return newState
    case LOAD_ONE_CART:
      return {
        ...state,
        [action.cart.id]: {
          ...state[action.cart.id],
          ...action.cart
        }
      }
    case CREATE_CART:
      newState = { ...state, [action.cart.id]: action.cart }
      return newState;
    case UPDATE_CART:
      return {
        ...state,
        [action.cart.id]: action.cart
      }
    case DELETE_CART:
      newState = { ...state }
      delete newState[action.cart_id]
      return newState
    default:
      return state;
  }
}

export default cart_reducer;
