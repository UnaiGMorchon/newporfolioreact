import React from "react";
import "./css/Slider.css";
import leftArrow from "./icons/arrowleft.png";
import rightArrow from "./icons/arrowright.png";


const BtnSlider =({direction, moveSlide}) =>{
    console.log(direction,moveSlide)
    return (
        <button>
            <div onClick={moveSlide} className={direction === "next" ? "btn-slide next" : "btn-slide prev"} >
                <img src={direction === "next" ? rightArrow : leftArrow} alt=""></img>

            </div>


        </button>


    )
}


export default BtnSlider;