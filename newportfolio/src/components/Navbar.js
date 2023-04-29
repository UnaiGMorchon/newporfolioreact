import {useState} from "react";
//import logo from "./img/logo.jpg"
import BurguerButton from "./BurguerButton";
import './css/BurguerButton.css';
import './css/Navbar.css';


function Navbar ({setPage}) {
    const [clicked, setClicked] = useState(false);
    // cuando esta a true lo pasa a false y viceversa
console.log(clicked);
    const handleClick = (page) => {
        setPage(page);
        setClicked(false);

    }
 
    return (
        <div className="NavContainer">
            <h2> Unai <span>García Morchón</span></h2>
                <div className={`links ${clicked ? "active" : ""}`}>
                    <a onClick={() => handleClick("carrusel")}>Home</a>
                    <a onClick={() => handleClick("skills")}>Skills</a>
                    <a onClick={() => handleClick("about")}>About</a>
                    <a onClick={() => handleClick("myworks")}>MyWorks</a>
                    <a onClick={() => handleClick("contact")}>Contact</a>
                </div>
            <div className="burguer">
            <BurguerButton clicked={clicked} handleClick={() => setClicked(!clicked)}/>
            </div>
            <div className={`initial ${clicked ? "active" : ""}`}>
            </div>
            
        </div>

    )
}

export default Navbar;
