import React from 'react';
import"./hero.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min"; // Ensure this is included for Bootstrap JS functionality
const Hero = () => {
  return (
    <section className="hero py-5" id="home">
      <div className="container">
        <div className="row justify-content-center text-center">
          <div className="col-lg-8 col-md-10 col-sm-12 mb-4 py-3">
            <img className="hero img-fluid" src="/src/assets/img/Mask group.png" alt="Hero Image" />
          </div>
          <div className="col-lg-10">
            <h1>SRI LANKA'S <span className="highlight">1ST</span></h1>
            <h1>AI MARKETING AGENCY</h1>
            <p style={{ fontFamily: "'Courier New', Courier, monospace" }}>
              Revolutionize Your Business with cutting-edge AI solutions to amplify market presence and maximize revenue.
            </p>
            <div className="buttons d-flex flex-wrap justify-content-center gap-3 mt-3">
              <a href="#" className="btn book-btn">Book a Call</a>
              <a href="#" className="btn know-btn">Know More</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;  // Ensure Hero is exported
