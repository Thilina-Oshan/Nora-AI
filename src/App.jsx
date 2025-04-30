import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import Navbar from "./Components/Nav/navbar";
import Hero from "./Components/Hero/hero";
import AboutSection from "./Components/About/about";
import ProjectsSection from "./Components/Projects/project";
import Services from "./Components/Services/services";
import Testimonials from "./Components/Testimonals/testimonals";

/* import "./App.css";  */


function App() {
 /*  const [count, setCount] = useState(0) */

  return (
    <>
     
     <Navbar/>
     <Hero/>
     <AboutSection/>
     <ProjectsSection/>
     <Services/>
     <Testimonials/>

    </>
  );
}

export default App
