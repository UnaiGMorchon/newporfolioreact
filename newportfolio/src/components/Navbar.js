import {useState, useEffect} from "react";
//import logo from "./img/logo.jpg"
import BurguerButton from "./BurguerButton";
import './css/BurguerButton.css';
import './css/Navbar.css';



function Navbar () {
    const [clicked, setClicked] = useState(false);
    // cuando esta a true lo pasa a false y viceversa
console.log(clicked);
    const handleClick = () => {
        setClicked(!clicked)

    }


    return (
        <div className="navbar">
            <h2> Navbar <span>Responsive</span></h2>
                <div className={`links ${clicked} ? "active" : ""}`}>
                    <a href="/">Home</a>
                    <a href="/">Skills</a>
                    <a href="/">About</a>
                    <a href="/">Contact</a>
                </div>
            <div className="burguer">
            <BurguerButton clicked={clicked} handleClick={handleClick}/>
            </div>
        </div>

    )
}

















/* const links =[
        {
            id: "about",
            text: "About me",
            icon: "fa fa-",
        },
        {
            id: "skills",
            text: "Skills",
            icon: "fa fa-",
        },
        {
            id: "myworks",
            text: "My Works",
            icon: "fa fa-",
        },
        {
            id: "contact",
            text: "Contacto",
            icon: "fa fa-",
        },

]

const Navbar =()=> {
return (
    <div position="sticky">
        <h1>Header</h1>
            <section>
            <img src={logo} alt="logo"></img>
                <ul>
                    {links.map(({ id, text }) => (
                        <li key={id}>
                        <a href={`#${id}`}>{text}</a>
                        </li>
                    ))}
                </ul>
            </section>
    </div>

)

} */

export default Navbar;
