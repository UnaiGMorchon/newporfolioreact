import {useState} from "react";

import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Carrusel from './components/Carrusel';
import About from './components/About';
import Skills from './components/Skills';
import MyWorks from './components/MyWorks';
import Contact from './components/Contact';


function App() {
  const [page, setPage] = useState('carrusel');

  const renderPage = () => {
    switch (page) {
      case 'carrusel':
        return <Carrusel />;
      case 'about':
        return <About />;
      case 'skills':
        return <Skills />;
      case 'my-works':
        return <MyWorks />;
      case 'contact':
        return <Contact />;
      default:
        return <Carrusel />;
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
