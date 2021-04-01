import React, { useEffect } from "react";
import './App.css';
import Nav from './components/navbar.js';
import About from './components/about.js';
import TokenEcon from './components/tokenEcon';
import Team from './components/team';
import ContactUs from './components/contactUs';
import Footer from './components/footer';
import RoadMap from './components/roadMap';
import Aos from  "aos";
import "aos/dist/aos.css";

const App=()=> {
  useEffect(()=> {
    Aos.init({ duration: 1500 });
  }, [])
  return (
    <div className="App">
      <Nav />
      <div data-aos="fade-up">
        <About />
      </div>
      
      <div data-aos="fade-left">
        <TokenEcon />
      </div>
      
      <div data-aos="fade-right">
        <RoadMap />
      </div>
      
      <div data-aos="fade-left">
        <Team />
      </div>
     
     <div  data-aos="fade-right">
      <ContactUs />
     </div>
      
      <Footer data-aos="fade-up"/>
      
    
    </div>
  );
}

export default App;
