import React from 'react';
import "./about.css";

const AboutSection = () => {
  return (
    <section style={{ width: '100%', padding: '4rem 1rem' }}>
      <div style={{ maxWidth: '64rem', margin: '0 auto', textAlign: 'center' }} id="abouth">
        
        <div className="about-btn">
          <h3>About us</h3>
        </div>

        <h2 className="about-heading">
          WHO WE ARE: SRI LANKA'S FIRST <br />
          AI MARKETING AGENCY
        </h2>

        <div className="about-contentBox">
          <p className="about-content">
            We are a pioneering AI marketing agency in Sri Lanka, dedicated to
            transforming businesses through innovative digital solutions. Our
            team of experts combines cutting-edge AI technology with creative
            marketing strategies to deliver exceptional results for our clients.
            With a focus on data-driven approaches and personalized service, we
            help businesses of all sizes achieve their marketing goals and stay
            ahead in the digital landscape.
          </p>
        </div>

      </div>
    </section>
  );
};

export default AboutSection;
