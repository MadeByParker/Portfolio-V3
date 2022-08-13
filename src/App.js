import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import { createContext, useState } from 'react';


export const ThemeContext = createContext(null);

function App() {
  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    setTheme((currentTheme) => (currentTheme === "light" ? "dark" : "light"));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme}}>
      <div className="App" id={theme}>
        <Navbar toggleTheme={setTheme}/>
        <Home />
        <About />
        <Skills />
        <Projects />
      </div>
    </ThemeContext.Provider>

  );
}

export default App;
