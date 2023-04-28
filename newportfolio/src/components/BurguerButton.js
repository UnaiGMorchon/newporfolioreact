import React from "react";
import './css/BurguerButton.css';

function BurguerButton({handleClick,clicked}){

    return (
        <div className="burguer"> 
        <div onClick={handleClick} className={`icon nav-icon-5 ${clicked ? "open" : "" }`}> 
            <span></span>
            <span></span>
            <span></span>
        </div>
        </div>
    )
}

export default BurguerButton;
