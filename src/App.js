import React from "react";
import Landing from "./components/Landing";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Projects from "./components/Projects";
import Offer from "./components/Offer";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import { transitions, positions, Provider as AlertProvider } from "react-alert";
import AlertTemplate from "react-alert-template-basic";
import Scrollspy from 'react-scrollspy'

import "./App.css";

const options = {
  // you can also just use 'bottom center'
  position: positions.TOP_RIGHT,
  timeout: 5000,
  offset: "30px",
  // you can also just use 'scale'
  transition: transitions.SCALE,
};

const App = () => {
  return (
    <AlertProvider template={AlertTemplate} {...options}>
      <div className='app'>
     
       <Landing id='landing' />
       <Scrollspy >
       <nav className='navbar'>
        <a href='#about'>About </a> |<a href='#offer'>Offer</a> |<a href='#projects'>Projects</a> |
         |<a href='#contact'>Contact </a>
      </nav>
      </Scrollspy>
        <About id='about'/>
        <Offer id='offer'/>
        <Projects  id='projects' />
        <Contact id='contact' />
        <Footer />
      
      </div>
    </AlertProvider>
  );
};

export default App;
