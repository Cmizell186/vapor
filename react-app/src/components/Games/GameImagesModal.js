import React, {useState} from 'react';
import { Modal } from '../../context/Modal';
import GameImages from './GameImages';
import UploadGamePicture from './GameImageForm'
const GameImageModal = () =>{
    const [showModal, setShowModal] = useState(false);

    return (
        <>
            <button className='edit_images' onClick={() => setShowModal(true)}>
                Update Game Images
            </button>
            {showModal && (
                <Modal onClose={() => setShowModal(false)}>
                    <UploadGamePicture/>
                    <GameImages />
                    <button onClick={() => setShowModal(false)}>Finished</button>
                </Modal>
            )}
        </>
    )
}

export default GameImageModal
