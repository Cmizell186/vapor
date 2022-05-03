import React, { useState } from 'react';
import { Modal } from '../../context/Modal';
import EditGame from './GameEditForm';

const GameEditModal = ({ user, game }) => {
  const[showModal, setShowModal] = useState(false);

  return (
    <>
      <button className='edit_button' onClick={() => setShowModal(true)}>Update Game Details</button>
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
