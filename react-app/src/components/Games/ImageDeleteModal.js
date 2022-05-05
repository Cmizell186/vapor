import { Modal } from '../../context/Modal';
import { useState } from 'react';
import DeleteImageForm from './ImageDeleteForm';
import './GameImages.css'

function DeleteImageModal ({gameId, photoId}) {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <button className="deleteImage" onClick={() => setShowModal(true)}>
        Delete Image
      </button>
      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          <DeleteImageForm  hideModal={() => setShowModal(false)} gameId={gameId} photoId={photoId} />
        </Modal>
      )}
    </>
  )
}

export default DeleteImageModal;
