import React, {useState} from 'react';
import { Modal } from '../../context/Modal';
import GameImages from './GameImages';
import UploadGamePicture from './GameImageForm'
import './GameImages.css'
const GameImageModal = () =>{
    const [showModal, setShowModal] = useState(false);

    return (
        <>
            <button className='edit_images' onClick={() => setShowModal(true)}>
                Update Game Images
            </button>
            {showModal && (
                <Modal onClose={() => setShowModal(false)} className="game-image-container">
                        <UploadGamePicture/>
                        <GameImages />
                <div className='finished-continer-btn'>
                    <button onClick={() => setShowModal(false)} className='finished-btn'>
                        Finished Editing
                    </button>
                </div>
                </Modal>
            )}
        </>
    )
}

export default GameImageModal
