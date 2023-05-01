import { useState } from "react";
import "./css/CarruselTexto.css";

const CarruselTexto = () => {
  const [position, setPosition] = useState(0);
  const textList = ["2003", "2008", "2023", "2050", "2077"];
   

  const next = () => {
    setPosition((position + 1) % textList.length);
  };

 /*  const prev = () => {
    setPosition((position - 1 + textList.length) % textList.length);
  }; */

  return (
    <div className="carrusel" onClick={next}>
      <p className="texto">{textList[position]}</p>
     {/*  <button className="prev1" onClick={prev}>{"< "}</button>
      <button className="next1" onClick={next}>{" >"}</button> */}
    </div>
  );
};

export default CarruselTexto;





