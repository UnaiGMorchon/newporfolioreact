import {useState, useEffect} from "react";
import "./css/Slider.css";
import BtnSlider from "./BtnSlider";
import DataSlider from "./DataSlider";



const Slider =()=> {
const [slideIndex, setSlideIndex] = useState (1);



const nextSlide = () => {
    const index = slideIndex !== DataSlider.length ? slideIndex + 1 : 1;
    setSlideIndex(index);
}



/* const nextSlide =() =>{
   if(slideIndex !== DataSlider.length){
        setSlideIndex(slideIndex + 1)    
    }
    else  if(slideIndex === DataSlider.length){
        setSlideIndex(1)
    }
} */

const prevSlide = () => {
    const index = slideIndex !== 1 ? slideIndex - 1 : DataSlider.length;
    setSlideIndex(index);
}


/* 
const prevSlide =() =>{
    if(slideIndex !== 1){
        setSlideIndex(slideIndex - 1) 
        console.log(prevSlide);
    }
    else  if(slideIndex === 1){
        setSlideIndex(DataSlider.length)
    }

}*/


const moveDot =(index) => {
    setSlideIndex(index);
}

console.log(Array.from({length: 5}));

return (
    <div className="container-slider">
        {DataSlider.map((object, index) =>{
                return (
                    <div key={object.id} className={slideIndex === index + 1 ? "slide active-anim slider-anim": "slide"} > 
                    <img src={object.image}/>
                    <p>{object.title} </p>
                    </div>
                )
        })}
        <BtnSlider moveSlide={nextSlide} direction={"next"} />

        <BtnSlider moveSlide={prevSlide} direction={"prev"}/>

        <div className="container-dots">
             {Array.from({length: 5}).map((item, index) => {
                return (
            <div onClick={() => moveDot(index + 1)} className={slideIndex === index + 1 ? "dot active" : "dot"} key={index}></div>
                );
            })}
</div>
    </div>
)   
}

export default Slider;
