import {useState} from "react";
import Footer from './Footer';
import './css/MyWorks.css';
import Modal from "./Modal";
//import Works from "./Works";




const MyWorks =()=> {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const [selectedTextTitulo, setSelectedTextTitulo] = useState(null);
  const [selectedTextParrafo, setSelectedTextParrafo] = useState(null);

  const handleImageClick = (imageSrc, imageTextTitulo, ImageTextParrafo) => {
    setSelectedImage(imageSrc);
    setSelectedTextTitulo(imageTextTitulo);
    setSelectedTextParrafo(ImageTextParrafo);
    setModalOpen(true);
  };

  const handleModalClose = () => {
    setSelectedImage(null);
    setSelectedTextTitulo(null);
    setSelectedTextParrafo(null);
    setModalOpen(false);
  };





return (
  <div id="MyWorks">  
  <br />
  <br />
  <br />
  <br />
  <h1>My Works</h1>
  <section className="o-grid js-thumbs">
    <div onClick={() => handleImageClick("./img/40diasmayo.png", "40 dias", "Cortometraje del libro 40 dias de Mayo de Mikel Alvira")}>
      <img src="./img/40diasmayo.png" alt="" />
    </div>
    <div onClick={() => handleImageClick("./img/diseño1.png", "Campaña Publicitaria", "Tu decides como te sientes (Mobiliario de Jardin)")}>
      <img src="./img/diseño1.png" alt="" />
    </div>
    <div onClick={() => handleImageClick("./img/diseño2.png", "Campaña Publicitaria Mini", "Why not? (Mini - Eléctrico)")}>
      <img src="./img/diseño2.png" alt="" />
    </div>
    <div onClick={() => handleImageClick("./img/diseño3.png", "Campaña Publicitaria", "Rueda con energia (Atomic Bikes)")}>
      <img src="./img/diseño3.png" alt="" />
    </div>
    <div onClick={() => handleImageClick("./img/quedelicia.png", "Aplicación -Que Delicia", "Entra en la mayor comunidad de reposteros")}>
      <img src="./img/quedelicia.png" alt="" />
    </div>
    <div onClick={() => handleImageClick("./img/booktinder.jpg", "Aplicación - Book Tinder", "Colabora con la comunidad para los amantes de la lectura")}>
      <img src="./img/booktinder.jpg" alt="" />
    </div>
    <div onClick={() => handleImageClick("./img/romano.png", "Fotografía", "Fotos de un cortometraje de Romanos")}>
      <img src="./img/romano.png" alt="" />
    </div>
    <div onClick={() => handleImageClick("./img/vaticano.png", "Fotografía", "Vaticano")}>
      <img src="./img/vaticano.png" alt="" />
    </div>
    <div onClick={() => handleImageClick("./img/londres.png", "Fotografía", "London")}>
      <img src="./img/londres.png" alt="" />
    </div>
  </section> 
 
  {modalOpen && (
    <Modal isOpen={true} onClose={handleModalClose}>
      <img src={selectedImage} alt="" />
      <h2>{selectedTextTitulo}</h2>
      <p>{selectedTextParrafo}</p>
    </Modal>
  )}
                       <br></br> 
                       <br></br>  
                       <br></br>  
                       <br></br>  

   <Footer />
</div>
);
}


export default MyWorks;
