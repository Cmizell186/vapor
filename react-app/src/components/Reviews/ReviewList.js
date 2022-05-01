import { get_all_reviews } from '../../store/reviews'
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from "react";


const Reviews = () => {
const dispatch = useDispatch()
const reviews = useSelector(state => Object.values(state.reviews))
useEffect(() => {
    dispatch(get_all_reviews())
}, [dispatch])
console.log(reviews)

return (
    <>
    <h1>{reviews?.map(review =>
        <p>{review.content}</p>
        )}</h1>
    </>
)

}

export default Reviews;
