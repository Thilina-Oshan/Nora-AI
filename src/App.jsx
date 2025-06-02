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
import Contact from "./Components/Contact/contact";
import BlogSection from "./Components/Blog/blogSection";
import Newsletter from "./Components/News/news";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/about" element={<AboutSection />} />
        <Route path="/projects" element={<ProjectsSection />} />
        <Route path="/services" element={<Services />} />
        <Route path="/testimonials" element={<Testimonials />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/blog" element={<BlogSection />} />
        <Route path="/newsletter" element={<Newsletter />} />
      </Routes>
    </Router>
  );
}

export default App;
