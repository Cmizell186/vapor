import React, {useState} from 'react';
import { Modal } from '../../context/Modal';
import GameImages from './GameImages';
import UploadGamePicture from './GameImageForm'
import './GameImages.css'
const GameImageModal = () =>{
    const [showModal, setShowModal] = useState(false);

    return (
        <>
            <button id='jared_button' className='edit_images' onClick={() => setShowModal(true)}>
                Update Game Images
            </button>
            {showModal && (
                <Modal onClose={() => setShowModal(false)} className="game-image-container">
                    <div id='edit_image_modal'>
                        <GameImages />
                        <UploadGamePicture/>
                <div className='finished-continer-btn'>
                    <button onClick={() => setShowModal(false)} className='finished-btn'>
                        Finished Editing
                    </button>
                </div>
                </div>
                </Modal>
            )}
        </>
    )
}

export default GameImageModal
