import React, { useState } from 'react';
import { Modal } from '../../context/Modal';
import EditReview from './ReviewsEditForm';

const ReviewsEditModal = ({ user, review, gameId }) => {
  const[showModal, setShowModal] = useState(false);

  return (
    <>
      <a href="#" className='edit_button' onClick={() => setShowModal(true)} />
      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          <EditReview review={review} hideModal={() => setShowModal(false)} gameId={gameId} />
          <button onClick={e => setShowModal(false)}>Cancel</button>
        </Modal>
      )}
    </>
  );
}

export default ReviewsEditModal
