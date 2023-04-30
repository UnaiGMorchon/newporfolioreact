import {useState } from "react";
import Footer from './Footer';
import './css/Skills.css';
import Carrusel from "./Carrusel";


const Skills =()=> {
return (
    <div>
        <br>
        </br>
        <br>
        </br>
        <br>
        </br>
        <h1>Skills page</h1>
        <br>
        </br>
        <br>
        </br>
            <ul className="iconosskills">
                <li>
                    <img src="/img/html.gif" alt=""/>
                            <h1>Desarrollo Full Stack</h1>
                            <p>Es mi especialidad, creando aplicaciones web interactivas y escalables</p>
                </li>
                <li>
                    <img src="/img/promocion.gif" alt=""/>
                            <h1>Marketing Digital</h1>
                            <p>Experiencia en estrategias digitales para aumentar la presencia en línea</p>
                </li>
                <li>
                    <img src="/img/vector.gif" alt=""/>
                            <h1>Diseño</h1>
                            <p>Creo diseños atractivos y funcionales para sitios web y aplicaciones</p>
                </li>
                <li>
                    <img src="/img/reproductor-de-video.gif" alt=""/>
                            <h1>Audiovisuales</h1>
                            <p>Creatividad y habilidades técnicas para producir contenido visual impactante</p>
                </li>

            </ul>
            <br>
        </br>
        <br>
        </br>
        <Carrusel />
        <Footer/>
    </div>



)



}

export default Skills;
