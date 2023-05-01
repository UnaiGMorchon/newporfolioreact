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
        <h1>Skills</h1>
        <img className="imgfondo"src="/img/fondoskills.jpg" alt=""/>
        <br>
        </br>
        <br>
        </br>
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

<div className="titulacion">
<h1>Titulación</h1>
<br></br>
        <p>
            <ul >
                <li><b>Desarrollo Web Fulls Stack</b></li>
                <li>Gestión de <b>Marketing y Comunicación</b></li>
                <li><b>Master en Diseño Gráfico</b></li>
                <li><b>Community Manager</b></li>
                <li>Técnico en <b>Realización de Audiovisuales</b> y Espectáculos</li>
                <li>Técnico Superior en Sistemas de Regulación y Control Automáticos</li>
                <li>Técnico Especialista en Máquinas Eléctricas</li>
                <li><b>Técnico en Iluminación</b> en Espectáculos en Directo</li>
                <li>Operador de Equipos de Televisión</li>
            </ul>
        </p>
</div>
<br></br>
<br></br>
<br></br>
<div className="titulacion">
    <h3>Skills</h3>
    <br></br>
        <p>
            <ul className="otros">
                <li>Suite de Adobe</li>
                <li>HTML & CSS</li>
                <li>AVID, Media Composer, Final Cut Pro</li>
                <li>Apple Color</li>
                <li>Wordpress</li>
                <li>Hootsuite</li>
                <li>JavaSript</li>
                <li>Node</li>
                <li>MERN</li>
            </ul>
        </p>
</div>
<br></br>  
<br></br>  
<br></br>  
<br></br>  

        <Footer/>
    </div>



)



}

export default Skills;
