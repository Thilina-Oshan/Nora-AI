import React from 'react';
import "./hero.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import heroImg from '/src/assets/img/Mask group.png'; // Correct image import

const Hero = () => {
  return (
    <section className="hero d-flex align-items-center" id="home">
      <div className="container">
        <div className="row justify-content-center text-center">
          {/* Hero Image */}
          <div className="col-12 col-lg-6 col-md-8 col-sm-10 mb-4">
            <img className="img-fluid hero-img" src={heroImg} alt="Hero" />
          </div>

          {/* Hero Content */}
          <div className="col-12 col-lg-10 d-flex flex-column align-items-center justify-content-center text-center">
            <h1>SRI LANKA'S <span className="highlight">1ST</span></h1>
            <h1>AI MARKETING AGENCY</h1>
            <p className="hero-description">
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

export default Hero;
