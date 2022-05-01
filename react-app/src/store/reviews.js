const LOAD_ALL_REVIEWS = 'reviews/GET'
const LOAD_ONE_REVIEW = 'reviews/GET_ONE'
const CREATE_REVIEW = 'reviews/CREATE'
const UPDATE_REVIEW = 'reviews/UPDATE'
const DELETE_REVIEW = 'reviews/DELETE'

const all_reviews = (reviews) => ({
  type: LOAD_ALL_REVIEWS,
  reviews
})

const get_one = (review) => ({
  type: LOAD_ONE_REVIEW,
  review
})

const create = (review) = ({
  type: CREATE_REVIEW,
  review
})

const update = (review) = ({
  type: UPDATE_REVIEW,
  review
})

const remove = (id) => ({
  type: DELETE_REVIEW,
  review_id: id
})

export const get_all_reviews = () => async (dispatch) => {
  const response = await fetch("/api/reviews/")
  if(response.ok) {
    const reviews = await response.json()
    dispatch(all_reviews(reviews.reviews_list))
  } else {
    return "ERROR AT GET_ALL_REVIEWS THUNK"
  }
}

export const get_one_review = (id) => async(dispatch) => {
  const response = await fetch(`/api/reviews/${id}`)
  if (response.ok) {
      const { review } = await response.json()
      dispatch(get_one(review))
  } else {
      return "ERROR AT GET_ONE_REVIEW THUNK"
  }
}

export const create_review = (review) => async(dispatch) => {
  const response = await fetch("/api/reviews", {
      method: "POST",
      headers: {
          'Accept': 'application/json',
          "Content-Type": "application/json",
        },
        body: JSON.stringify(review)
  })
  if (response.ok) {
      const review = await response.json()
      console.log(review)
      dispatch(create(review))
  } else {
      return "ERROR AT CREATE_REVIEW THUNK"
  }
}

export const update_review = (review) => async(dispatch) => {
  const response = await fetch(`/api/reviews/${review.id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(review)
  })
  if (response.ok) {
      const data = await response.json()
      console.log(data)
      const updated_review = data.review
      dispatch(update(updated_review))
  } else {
      return "ERROR AT UPDATE_REVIEW THUNK"
  }
}

export const delete_review = (id) => async (dispatch) => {
  const current_review = await fetch(`/api/reviews/${id}`, {
    method: "DELETE",
  })
  if (current_review.ok) {
    dispatch(remove(id))
  } else {
    return "ERROR AT DELETE_REVIEW THUNK"
  }
}

const inititalState = {}

const review_reducer = (state = inititalState, action) => {
  let newState;
  switch (action.type) {
    case LOAD_ALL_REVIEWS:
      newState = {}
      action.reviews.forEach((review) => (newState[review.id] = review))
      return newState
    case LOAD_ONE_REVIEW:
      return {
        ...state,
        [action.review.id]: {
          ...state[action.review.id],
          ...action.review
        }
      }
    case CREATE_REVIEW:
      newState = { ...state, [action.review.id]: action.review }
      return newState
    case UPDATE_REVIEW: return {
      ...state,
      [action.review.id]: action.review
    }
    case DELETE_REVIEW:
      newState = {...state}
      delete newState[action.review_id]
      return newState
    default:
      return state;
  }
}

export default review_reducer;
