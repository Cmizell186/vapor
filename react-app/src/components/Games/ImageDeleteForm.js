import { useDispatch } from "react-redux";
import { delete_specific_image } from "../../store/gameImage";
import './GameImages.css'

const DeleteImageForm = ({hideModal, photoId, gameId}) => {
    const dispatch = useDispatch();

    const handleSubmit = async (e) => {
        e.preventDefault();
            dispatch(delete_specific_image(gameId,photoId))
            hideModal();
    }

    const handleClick = (e) =>{
        e.preventDefault()
        hideModal();
    }

    return (
        <form id='delete-gameImage-form' onSubmit={handleSubmit}>
            <div className="image-text-container">
                <h3 className="delete-image-text">DELETE IMAGE?</h3>
            </div>
            <div className="image-text-container">
                <p className="delete-image-text p-tag">Are you sure you want to delete this image? It cannot be undone</p>
            </div>
            <div className='delete-gameImage-btns'>
                <button id="delete-images" type="submit">Delete</button>
                <button id="cancel-images" type="button" onClick={handleClick}>Cancel</button>
            </div>
        </form>
    )
}

export default DeleteImageForm
