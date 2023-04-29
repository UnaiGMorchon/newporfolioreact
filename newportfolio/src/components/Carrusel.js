import {useState} from "react";
import './css/Carrusel.css';

const Carrusel =() => {
const [position, setPosition] = useState(0);
const [imageList, setImageList]= useState ([
    "./img/slide1.jpg",
    "./img/slide2.jpg",
    "./img/slide3.jpg",
    "./img/slide4.jpg",
    "./img/slide5.jpg",
  ]);


const next=() =>{
    let newPosition = position + 1;
    if(newPosition >= imageList.length) {
        newPosition = 0;
    }
    setPosition(newPosition);
}
const prev=() =>{
    let newPosition = position - 1;
    if(newPosition < 0 ) {
        newPosition = imageList.length -1;
    }
    setPosition(newPosition);
}

const moveDot =(index) => {
    setImageList(index);
}


return (
        <div className="container-slider">
                <img src={imageList[position]} alt="carrusel de imagenes"></img>
                <button className="prev" onClick={next}>{"< "}</button>
                <button className="next" onClick={prev}>{" >"}</button>
                <div className="container-dots">
                {Array.from({length: 5}).map((item, index) => {
                    return (
                <div onClick={() => moveDot(index + 1)} className={imageList === index + 1 ? "dot active" : "dot"} key={index}></div>
                    );
                })}
                </div>
        </div>
    )
}

export default Carrusel;