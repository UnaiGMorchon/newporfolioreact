import {useState} from "react";
import './css/Footer.css';



const Footer =()=> {
return (
    <div className="footer">
     <br></br>  
   <br></br>  

       <p>Made with <img className="iconofooter" src="./img/corazon.gif"/> & <img className="iconofooter"  src="./img/taza-de-cafe.gif"/></p>
       <p>Copyright © 2023 · <a href="#">Aviso legal</a> . <a href="#">Política de privacidad</a> . <a href="#">Política de cookies</a></p>
       <br></br>  
       <br></br>  

    </div>
)
}

export default Footer;