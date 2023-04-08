import Navbar from "./components/Navbar/Navbar";
import './App.css'
import Intro from './components/Intro/intro';
import Skills from './components/Skills/Skills'
import Experience from './components/Experience/Experience';
import Projects from './components/Projects/Projects';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import Toggle from './components/Toggle/Toggle';
import {themeContext} from './Context'
import { useContext } from 'react';



function App() {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className="App"
    style={{
      background: darkMode? 'black': '',
      color: darkMode? 'white': ''
    }}>
    <Navbar/>
    <Intro/>
    <Skills/>
    <Experience/>
    <Projects/>
    <Contact/>
    <Footer/>
    <Toggle/>
    </div>
  );
}

export default App;
