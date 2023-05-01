import { useState,useEffect } from "react";
import './css/Modal.css';

function Modal({ isOpen, onClose, children }) {
  const [isModalOpen, setIsModalOpen] = useState(false);


  useEffect(() => {
    setIsModalOpen(isOpen);
  }, [isOpen]);

  const closeModal = () => {
    setIsModalOpen(false);
    onClose && onClose();
  };

  const handleKeyDown = (event) => {
    if (event.key === 'Escape') {
      closeModal();
    }
  };

  const handleClick = (event) => {
    if (event.target === event.currentTarget) {
      closeModal();
    }
  };
  return (
    <div className={`modal ${isOpen ? 'open' : ''}`} onClick={handleClick} onKeyDown={handleKeyDown}>
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            
            
          </div>
          <div className="modal-body">{children}</div>
        </div>
      </div>
    </div>
  );
}

export default Modal;