import React from "react";
import './css/BurguerButton.css';

function BurguerButton({handleClick,clicked}){

    return (
        <main> 
        <div onClick={handleClick} className={`btn-wrapper ${clicked} ? "active" : "" `}> {/* open esta en el css opne es opacity 0*/}
          <div className="btn1 btn">
            <span className="line"></span>
            <span className="line"></span>
            <span className="line"></span>
          </div>
        </div>
        </main>
    )
}

export default BurguerButton;