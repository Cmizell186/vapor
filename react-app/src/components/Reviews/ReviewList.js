import { get_all_reviews } from '../../store/reviews'
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from "react";
import './reviewstyles.css';

const Reviews = ({user, filteredReviews}) => {
const dispatch = useDispatch()
const reviews = useSelector(state => Object.values(state.reviews))
useEffect(() => {
    dispatch(get_all_reviews())
}, [dispatch])

return (
    <>
    <div className="reviews-list-container">
        {filteredReviews?.map(review =>
        <div className='review-box' key={review.id}>
            <div className="profile-pic-box">
                <img id="profile_img" src={user?.profile_picture} alt=""></img>
            </div>
            <div className="review-recommendation">
                <div className="thumb">
                <img src={review?.is_recommended
                    ? "https://store.cloudflare.steamstatic.com/public/shared/images/userreviews/icon_thumbsUp.png"
                    : "https://community.cloudflare.steamstatic.com/public/shared/images/userreviews/icon_thumbsDown.png?v=1"
                    }
                    width="44" height="44" alt=""
                />
                <div className="recommend-description">
                <h4>{review?.is_recommended
                    ? "Recommended"
                    : "Not Recommended"
                }
                </h4>
                </div>
                <div className="review-content">
                    {review.content}
                </div>
                </div>
            </div>
        </div>
        )}
    </div>
    </>
)

}

export default Reviews;
