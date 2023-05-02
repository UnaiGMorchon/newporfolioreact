import {useState} from "react";
import Footer from './Footer';
import './css/About.css';
import './css/RRSS.css';
import RRSS from "./RRSS";


const About =()=> {
    const [fileUrl, setFileUrl] = useState("");

    const handleDownload = () => {
      const url = "/img/Unai CV diseño MAY22 red.pdf";
      setFileUrl(url);
    };
  


return (
    <div >
        <br>
        </br>
        {/* <h1>SOBRE MI</h1>
        <h3>conocéme mejor</h3> */}
            <section id="About">
                <section>
                <img className="imagen" src="./img/unai5.jpg" alt="foto de unai"></img>
                </section>
                    <section className="container-texto">
                    <br></br>
                    <h1>Unai García Morchón</h1>
                    <br></br>
                    <p> Durante varios años estudie hasta descubrir mi vocación real, <b>la comunicación</b>, con los años he ido alimentando esa faceta con diferentes hobbies (Origami, Fotografía, Dibujo).</p>
                        <br></br>
                        <p>Es el caso de la fotografía, siempre me han preguntado porque en mis fotos no sale gente. Tengo <b>otra forma de ver las cosas</b> , de hecho, me suelo fijar en cosas que la mayoría de la gente no ve o les pasa desapercibida.</p>
                        <br></br>
                        <p>En mi vida tuve un punto de inflexión al tener que decidirme por lo correcto o por seguir mi pasión y lo que realmente me gustaba, en aquel momento supe que debía seguir el <b>camino creativo</b>.</p>
                        <br></br>
                        <p>Me he convertido en un realizador con más de 16 años de experiencia y entusiasta por el medio Audiovisual. Con la Beca Leonardo, aprendí a adaptarme fácilmente a un nuevo entorno cultural en Tallin University of Technology y en la Televisión de Narva (Estonia).</p>
                        <br></br>
                        <p><b>El mundo del Marketing Digital</b>  está ayudando más aún a mi faceta creativa, integrando nuevos conocimientos de comunicación y marketing online a mi experiencia audiovisual. <b>Apasionado</b>  por el mundo creativo, por el diseño y la fotografía y por el Marketing Digital.</p>
                        <br></br>
                        <p>Soy una persona <b>proactiva, dinámica</b> y muy creativa, que puede aportar ideas y nuevas formas de ver las cosas. Entusiasta por el trabajo en equipo, por aprender y compartir conocimiento.</p>
                        <br></br>
                        <p>Siempre <b>buscando el estímulo creativo</b>. Tengo especial interés por los sectores donde la creatividad sea un componente innovador y de valor añadido que genere un impacto positivo en el producto o en la sociedad en general.</p>
                        
                </section>
            </section>
            <div className="cuadradoazul"></div>
            <section className="datos">
                    <img className="iconodescarga" src="./img/descargar.gif" alt=""/>
                    <a onClick={handleDownload} href={fileUrl} download="Unai_García_Morchon_cv.pdf"> Descargar CV </a>
                    <p> unaitxu79@gmail.com</p>
            </section>

                     <RRSS/>
            <Footer />
            
    </div>
);
}

export default About;


