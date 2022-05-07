import React, { useState } from 'react';
import { Modal } from '../../context/Modal';
import EditGame from './GameEditForm';
import './GameImages.css'

const GameEditModal = ({ user, game }) => {
  const[showModal, setShowModal] = useState(false);

  return (
    <>
      <a href="#" className='edit_button_game' onClick={() => setShowModal(true)}>Update Game Details</a>
      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          <EditGame gamelisting={game} hideModal={() => setShowModal(false)} />
          <button onClick={() => setShowModal(false)}> Cancel </button>
        </Modal>
      )}
    </>
  );
}

export default GameEditModal;
