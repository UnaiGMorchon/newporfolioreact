import {useState} from "react";

import './css/Home.css';


const Home =()=> {
return (
    <div className="home">
        <h1>welcome</h1>
        <h2> El material con el que se forjan los sueños </h2>
        <video src="/video/video.mp4" poster="/images/video-poster.jpg" type="video/mp4" autoPlay muted loop></video>

    </div>



)



}

export default Home;
