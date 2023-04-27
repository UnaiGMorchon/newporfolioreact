import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Skills from './components/Skills';
import About from './components/About';
import MyWorks from './components/MyWorks';
import Contact from './components/Contact';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navbar />
        <Skills title="My Skills"  id="skills"/>
        <About title="About me" id="about"/>
        <MyWorks title="My Works" id="myworks"/>
      <Contact title="Contact" id="contact"/>
      </header>
    </div>
  );
}

export default App;
