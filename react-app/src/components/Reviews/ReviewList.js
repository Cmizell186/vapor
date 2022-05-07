import { get_all_reviews } from '../../store/reviews'
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from "react";
import './reviewstyles.css';

const Reviews = ({user, filteredReviews}) => {
const dispatch = useDispatch()
const reviews = useSelector(state => Object.values(state.reviews))
// review.query.join to get users associated with review
// const users = useSelector(state => Object.values(state.users))
let reviewUser;
// console.log(reviewUser, '-------------------00000')
useEffect(() => {
    dispatch(get_all_reviews())
}, [dispatch])

return (
    <>
    <div className="reviews-list-container">
        {filteredReviews?.map(review =>
        <div id='review-box' key={review.id}>
            <div className="user_box">
            <div className="profile_box">
                <a className='profile_img_link' href={`/users/${user.id}`}>
                    <img id="profile_img_review" src={user?.profile_picture} alt=""></img>
                </a>
                <a id="profile_name_link" href={`/users/${user.id}`}>
                    <div id="profile_name_div">{user.username}</div>
                </a>
            </div>
            </div>
            <div className="review_content_box">
            <div className="review_recommendation">
                <div className="review-header">
                <div className="thumb">
                <img src={review?.is_recommended
                    ? "https://store.cloudflare.steamstatic.com/public/shared/images/userreviews/icon_thumbsUp.png"
                    : "https://community.cloudflare.steamstatic.com/public/shared/images/userreviews/icon_thumbsDown.png?v=1"
                    }
                    width="44" height="44" alt=""
                />
                </div>
                <div className="recommend-description">
                <div id='yay_or_nay'>{review?.is_recommended
                    ? "Recommended"
                    : "Not Recommended"
                }
                </div>
                </div>
                </div>
            </div>
                <div id="review_content">
                    {review.content}
                </div>
                </div>
        </div>
        )}
    </div>
    </>
)

}

export default Reviews;
