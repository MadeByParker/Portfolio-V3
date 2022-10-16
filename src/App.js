import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import { createContext, useState, useEffect } from 'react';
import ReactSwitch from "react-switch";
import Contact from "./components/Contact";
import { initializeApp } from 'firebase/app';
import firebaseConfig from './firebaseConfig';
import Footer from "./components/Footer";
import Loader from "./components/Loader";
import { motion } from "framer-motion";

export const ThemeContext = createContext(null);



function App() {
  const firebaseApp = initializeApp(firebaseConfig);
  const [darkMode, setDarkMode] = useState('light');

  const toggleTheme = () => {
    setDarkMode((currentTheme) => (currentTheme === "light" ? "dark" : "light"));
  };

  const [load, setLoaded] = useState(false);
  useEffect(() => {
    setLoaded(true);
    setTimeout(() => {
      setLoaded(false);
    }, 4500);
  }, []);


  
  return (
    <ThemeContext.Provider value={{ darkMode, toggleTheme}}>
        {load ? ( 
          <Loader loading={load} />
         ) : ( 
          <motion.div 
            initial={{ x: -window.innerWidth , scale: 1 }}
            animate={{ x: 0, scale: 1 }}
            transition={{ duration: 1 }}
            className="App bg-[121212]" id={darkMode}>
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
          </motion.div>
         )}     
    </ThemeContext.Provider>

  );
};

export default App;
