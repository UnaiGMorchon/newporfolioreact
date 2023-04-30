import {useState} from "react";
import Footer from './Footer';
import './css/MyWorks.css';




const MyWorks =()=> {
return (
    <div id="MyWorks">  
        <br>
        </br>
        <br>
        </br>
        <br>
        </br>
        
        <h1>My Works page</h1>
        <section class="o-grid js-thumbs">
        <div>
          <img src="./img/40diasmayo.png" alt="" />
        </div>
            <div><img src="./img/diseño1.png" alt=""/></div>
            <div><img src="./img/diseño2.png" alt=""/></div>
            <div><img src="./img/diseño3.png" alt=""/></div>
            <div><img src="./img/lagartija.png" alt=""/></div>
            <div><img src="./img/londres.png" alt=""/></div>
            <div><img src="./img/romano.png" alt=""/></div>
            <div><img src="./img/vaticano.png" alt=""/></div>
            <div><img src="./img/londres.png" alt=""/></div>
            </section>
  
      <Footer />
    </div>
  );
}

export default MyWorks;
