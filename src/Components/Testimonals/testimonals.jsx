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
        <div className="container py-5 position-relative">
          <div className="row justify-content-center position-relative z-1">
            {/* Left Card */}
            <div className="col-md-4 d-none d-md-block position-relative" style={{ zIndex: 1, opacity: 0.6 }}>
              <div className="card bg-dark text-white p-4 rounded-4">
                <div className="mb-2 text-purple">★★★★★</div>
                <h5 className="fw-bold mb-0">Aravinda Jayasuriya</h5>
                <small className="text-muted">Managing Director of GreenWave Ventures</small>
                <p className="mt-3 small">
                  "From branding to digital marketing, their AI-powered approach made a huge difference. We now have a stunning website and steady stream of leads."
                </p>
              </div>
            </div>

            {/* Center/Main Card */}
            <div className="col-md-6 col-12 mb-4 mb-md-0">
              <div className="card bg-dark text-white p-5 rounded-4 shadow-lg">
                <div className="mb-2 text-purple">★★★★★</div>
                <h4 className="fw-bold">Nimal Perera</h4>
                <small className="text-muted">CEO of LankaTech Solutions</small>
                <p className="mt-3">
                  "This agency completely transformed our online presence! Their AI-powered strategies helped us reach the right audience, and our engagement skyrocketed. We saw a 60% increase in conversions within just three months. Highly recommended!"
                </p>
              </div>
            </div>

            {/* Right Card */}
            <div className="col-md-4 d-none d-md-block position-relative" style={{ zIndex: 1, opacity: 0.6 }}>
              <div className="card bg-dark text-white p-4 rounded-4">
                <div className="mb-2 text-purple">★★★★★</div>
                <h5 className="fw-bold mb-0">Another Client</h5>
                <small className="text-muted">Position / Company</small>
                <p className="mt-3 small">
                  "Working with them has been a game-changer! Our customer experience and conversions have improved drastically. We're thrilled with the results."
                </p>
              </div>
            </div>
          </div>

          {/* Glow Effect Background */}
          <div
            className="position-absolute top-50 start-50 translate-middle z-0"
            style={{
              width: "600px",
              height: "300px",
              background: "radial-gradient(circle, rgba(138,94,255,0.5) 0%, transparent 70%)",
              filter: "blur(100px)",
              borderRadius: "50%",
            }}
          ></div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
