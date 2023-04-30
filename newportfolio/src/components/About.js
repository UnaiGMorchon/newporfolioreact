import {useState} from "react";
import Footer from './Footer';
import './css/About.css';


const About =()=> {
return (
    <div id="About">
        <br>
        </br>
        <h1>SOBRE MI</h1>
        <h3>conocéme mejor</h3>
            <section>
                <img src="/img/unai.JPG" alt="foto de unai"></img>
            </section>
            <section>
                <h1>Unai García Morchón</h1>
                   <p> Durante varios años estudie hasta descubrir mi vocación real, <b>la comunicación</b>, con los años he ido alimentando esa faceta con diferentes hobbies (Origami, Fotografía, Dibujo).</p>
                    <p>Es el caso de la fotografía, siempre me han preguntado porque en mis fotos no sale gente. Tengo <b>otra forma de ver las cosas</b> , de hecho, me suelo fijar en cosas que la mayoría de la gente no ve o les pasa desapercibida.</p>
                    <p>En mi vida tuve un punto de inflexión al tener que decidirme por lo correcto o por seguir mi pasión y lo que realmente me gustaba, en aquel momento supe que debía seguir el <b>camino creativo</b>.</p>
                    <p>Me he convertido en un realizador con más de 16 años de experiencia y entusiasta por el medio Audiovisual. Con la Beca Leonardo, aprendí a adaptarme fácilmente a un nuevo entorno cultural en Tallin University of Technology y en la Televisión de Narva (Estonia).</p>
                    <p><b>El mundo del Marketing Digital</b>  está ayudando más aún a mi faceta creativa, integrando nuevos conocimientos de comunicación y marketing online a mi experiencia audiovisual.</p>
                    <p><b>Apasionado</b>  por el mundo creativo, por el diseño y la fotografía y por el Marketing Digital.</p>
                    <p>Soy una persona <b>proactiva, dinámica</b> y muy creativa, que puede aportar ideas y nuevas formas de ver las cosas. Entusiasta por el trabajo en equipo, por aprender y compartir conocimiento.</p>
                    <p>Siempre <b>buscando el estímulo creativo</b>. Tengo especial interés por los sectores donde la creatividad sea un componente innovador y de valor añadido que genere un impacto positivo en el producto o en la sociedad en general.</p>
                    <p> Unai García</p>
                    <p> unaitxu79@gmail.com</p>
                    <p> Bilbao </p>
                    <button> download CV <img className="iconodescarga" src="/img/descargar.png"></img> </button>
            </section>
            <Footer />
    </div>
);
}

export default About;


