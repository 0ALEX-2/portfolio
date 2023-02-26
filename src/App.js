import React from "react";
import {About,Header,Skills,Work} from "./container"
import "./App.scss"
import Navbar from "./components/Navbar/Navbar";
import Contact from "./components/Contact/Contact";

function App() {
  return (
    <div className="app  h-screen overflow-y-scroll overflow-x-hidden z-0">
      <Navbar/>
      <section id="home">
      <Header />
      </section>
      
      <section id="about">
      <About/>
      </section>
      
      <section id="projects">
      <Work/>
      </section>
     
     <section id="skills" className="snap-center">
     <Skills/>
     </section>

     <section id="contact" className="snap-end">
     <Contact/>
     </section>
     
    </div>
  );
}

export default App;
