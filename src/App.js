import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import { createContext, useState } from 'react';
import ReactSwitch from "react-switch";
import Contact from "./components/Contact";



export const ThemeContext = createContext(null);

function App() {
  const [darkMode, setDarkMode] = useState('light');

  const toggleTheme = () => {
    setDarkMode((currentTheme) => (currentTheme === "light" ? "dark" : "light"));
  };
  
  

  return (
    <ThemeContext.Provider value={{ darkMode, toggleTheme}}>
      <div className="App" id={darkMode}>
        <Navbar />

        <div
          className="flex h-[80px] m-0"
          style={{
            justifyContent: "center",
            alignItems: "center",
          }}
        >
        <button className="switch z-50">
          <ReactSwitch className="m-0 z-50" onChange={toggleTheme} checked={darkMode === "dark"} />
          <label> {darkMode === "light" ? "Light Mode" : "Dark Mode"}</label>
        </button>
        </div>
        <Home />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </div>
    </ThemeContext.Provider>

  );
}

export default App;
