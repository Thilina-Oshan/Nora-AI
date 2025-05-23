import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./testimonals.css"; // Optional: put custom styles here

const Testimonials = () => {
  return (
    <section id="tesmo">
      <div className="container text-center py-5">
        <div className="client-btn mb-3">
          <h3 className="text-uppercase text-light">Testimonials</h3>
        </div>

        {/* Testimonials */}

         <div className="container d-flex flex-wrap justify-content-center gap-5 py-3">
        {/* Card 1 */}
        <div className="testimonial-card p-4">
          <div className="stars mb-2">★★★★★</div>
          <h5>Aravinda Jayasuriya</h5>
          <p className="text-muted small mb-2">Managing Director of GreenWave Ventures</p>
          <p>"From branding to digital marketing, their AI tools made a huge difference. We now have a stunning website and a steady stream of leads."</p>
        </div>

        {/* Main Card */}
        <div className="testimonial-card p-4 main-card">
          <div className="stars mb-2">★★★★★</div>
          <h5>Nimal Perera</h5>
          <p className="text-muted small mb-2">CEO of LankaTech Solutions</p>
          <p>"This agency completely transformed our online presence! Their AI-powered strategies helped us reach the right audience... Highly recommended!"</p>
        </div>

        {/* Card 3 */}
        <div className="testimonial-card p-4">
          <div className="stars mb-2">★★★★★</div>
          <h5>Another Client</h5>
          <p className="text-muted small mb-2">Founder of Example Corp</p>
          <p>"Their service has been a game-changer! We're thrilled with the outcome and professionalism!"</p>
        </div>
      </div>
     
      </div>
    </section>
  );
};

export default Testimonials;
