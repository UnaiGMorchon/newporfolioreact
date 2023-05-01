import {useState} from "react";
import './css/Carrusel.css';

const Carrusel =() => {
const [position, setPosition] = useState(0);
const [imageList, setImageList]= useState ([
    "./img/Slide11.jpg",
    "./img/Slide44.jpg",
    "./img/Slide33.jpg",
    "./img/Slide22.jpg",
    
  ]);
  const textList = ["Ténico de Audio y Video",
  "Desarrollo Web full Stack Junior",
  "Community Manager y Resposable Dpto. Audiovisual, Generador de Contenido",
  "Técnico de Audio/Vídeo, Diseño Gráfico, Postproducción.",
];

const next=() =>{
    let newPosition = position + 1;
    if(newPosition >= imageList.length) {
        newPosition = 0;
    }
    setPosition(newPosition);
    setPosition((position + 1) % textList.length);
}
const prev=() =>{
    let newPosition = position - 1;
    if(newPosition < 0 ) {
        newPosition = imageList.length -1;
    }
    setPosition(newPosition);
}


return (
        <div id="Carrusel" className="container-slider">
                <img src={imageList[position]} alt="carrusel de imagenes"></img>
                <p className="texto">{textList[position]}</p>
                <button className="prev" onClick={next}>{"< "}</button>
                <button className="next" onClick={prev}>{" >"}</button>
        </div>
    )
}

export default Carrusel;