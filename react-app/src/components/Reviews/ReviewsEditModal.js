import React, { useState } from 'react';
import { Modal } from '../../context/Modal';
import EditReview from './ReviewsEditForm';

const ReviewsEditModal = ({ user, review, gameId }) => {
  const[showModal, setShowModal] = useState(false);

  return (
    <>
      <button className='edit_button' onClick={() => setShowModal(true)}>Update Review</button>
      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          <EditReview review={review} hideModal={() => setShowModal(false)} gameId={gameId} />
        </Modal>
      )}
    </>
  );
}

export default ReviewsEditModal
