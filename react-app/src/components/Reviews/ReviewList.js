import { get_all_reviews } from '../../store/reviews'
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from "react";
import './reviewstyles.css';

const Reviews = () => {
const dispatch = useDispatch()
const reviews = useSelector(state => Object.values(state.reviews))
useEffect(() => {
    dispatch(get_all_reviews())
}, [dispatch])

return (
    <>
    <div className="reviews-list-container">
        {reviews?.map(review =>
        <div className='review-box' key={review.id}>
            {review.content}
        </div>
        )}
    </div>
    </>
)

}

export default Reviews;
