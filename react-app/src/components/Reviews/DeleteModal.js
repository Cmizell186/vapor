import React, { useState } from 'react';
import { Modal } from '../../context/Modal';

// For future sitewide modularity
const DeleteModal = ({ del, user }) => {
  const[showModal, setShowModal] = useState(false);

  return (
    <>
      <h1>DELETE REVIEW?</h1>
      <p>Are you sure you want to delete this review? This cannot be undone.</p>

      <button className='delete-button' onClick={() => setShowModal(true)}>Ok</button>
      {showModal && (
        <Modal onClose={() =>  setShowModal(false)}>
          handleDelete()
        </Modal>
      )}
    </>
  )
}
