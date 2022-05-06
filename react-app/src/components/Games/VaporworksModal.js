import React, {useState} from 'react';
import { Modal } from '../../context/Modal';
import GameListingForm from './GameListingForm';
import './GameImages.css'
const VaporWorksModal = () =>{
    const [showModal, setShowModal] = useState(false);

    return (
        <>
            <button className='edit_images' onClick={() => setShowModal(true)}>
                Update Game Images
            </button>
            {showModal && (
                <Modal onClose={() => setShowModal(false)} className="game-image-container">
                        <h1>Welcome to VaporWorks!</h1>
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
export default VaporWorksModal;
