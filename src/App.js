import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import { createContext, useState } from 'react';
import ReactSwitch from "react-switch";
import Contact from "./components/Contact";
import { BsFillGearFill } from 'react-icons/bs';
import { FaTimes } from 'react-icons/fa'
import Logo from './assets/logos/logo-script.png';
import { initializeApp } from 'firebase/app';
import firebaseConfig from './firebaseConfig';
import Footer from "./components/Footer";

export const ThemeContext = createContext(null);

function App() {
  const firebaseApp = initializeApp(firebaseConfig);
  const [darkMode, setDarkMode] = useState('light');

  const toggleTheme = () => {
    setDarkMode((currentTheme) => (currentTheme === "light" ? "dark" : "light"));
  };
  
  const [nav, setNav] = useState(false);

  
  return (
    <ThemeContext.Provider value={{ darkMode, toggleTheme}}>
      <div className="App" id={darkMode}>
        <Navbar />

        
        <button className="switch z-50">
          <ReactSwitch className="m-0 z-50" onChange={toggleTheme} checked={darkMode === "dark"} />
          <label> {darkMode === "light" ? "Light Mode" : "Dark Mode"}</label>
        </button>
        <Home />
        <About />
        <Skills />
        <Projects />
        <Contact />
        <Footer />
      </div>
    </ThemeContext.Provider>

  );
}

export default App;
