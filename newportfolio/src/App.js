import {useState} from "react";
import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Carrusel from './components/Carrusel';
import About from './components/About';
import Skills from './components/Skills';
import MyWorks from './components/MyWorks';
import Contact from './components/Contact';
import Works from "./components/Works";
import Home from "./components/Home";


function App() {
  const [page, setPage] = useState('home');

  const renderPage = () => {
    switch (page) {
      case 'home':
        return <Home />;
      case 'about':
        return <About />;
      case 'skills':
        return <Skills />;
      case 'myworks':
        return <MyWorks />;
      case 'contact':
        return <Contact />;
      default:
        return <Home />;
    }
  };



  return (
    <div className="App">
      <header className="App-header">
        <Navbar setPage={setPage}/>
        {renderPage()}
      </header>
    </div>
  );
}

export default App;
