import logo from './logo.svg';
import './App.css';
import Carrusel from './components/Carrusel';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Skills from './components/Skills';
import About from './components/About';
import MyWorks from './components/MyWorks';
import Contact from './components/Contact';
import Footer from './components/Footer';
//import Slider from './components/Slider';
import Viajes from './components/Viajes';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navbar />
        {/* <Slider/> */}
        <Carrusel />
        <Home/>
        <Skills />
        <About />
        <MyWorks />
        <Contact />
        <Footer/>
        {/* <Viajes/> */}
      </header>
    </div>
  );
}

export default App;

/* 
<Skills title="My Skills"  id="skills"/>
<About title="About me" id="about"/>
<MyWorks title="My Works" id="myworks"/>
<Contact title="Contact" id="contact"/>
</header> */