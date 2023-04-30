/* import { useState } from "react";
import './css/Modal.css';

function Modal(props) {
    const [isOpen, setIsOpen] = useState(props.isOpen);
  
    const handleClose = () => {
      setIsOpen(false);
      props.handleClose();
    };

  return (
    <>
      {/* Botón que abre la ventana modal 
      <button onClick={handleOpen}>Abrir ventana modal</button>

      {/* Ventana modal 
      {isOpen && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={handleClose}>
              &times;
            </span>
            <h2>{props.title}</h2>
            <p>{props.content}</p>
          </div>
        </div>
      )}
    </>
  );
}

export default Modal; */
