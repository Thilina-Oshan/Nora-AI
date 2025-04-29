import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "./nav.css";

const Navbar = () => {
  const [expanded, setExpanded] = useState(false);

  const toggleNavbar = () => {
    setExpanded(!expanded);
  };

  return (
    <nav className="navbar navbar-expand-lg p-3 fixed-top">
      <div className="container">
        {/* Brand Logo */}
        <a className="navbar-brand" href="#">
          <img src="/src/assets/img/Logo- Colored.svg" alt="Logo" height="40" />
        </a>

        {/* Toggler Button */}
        <button
          className="navbar-toggler"
          type="button"
          onClick={toggleNavbar}
          aria-controls="navbarNav"
          aria-expanded={expanded}
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Navbar Links */}
        <div className={`collapse navbar-collapse justify-content-end ${expanded ? "show" : ""}`} id="navbarNav">
          <ul className="navbar-nav align-items-center text-center">
            {["Home", "About", "Projects", "Services", "Testimonies", "Packages", "Tools"].map((item, i) => (
              <li className="nav-item" key={i}>
                <a className="nav-link" style={{ fontSize: "1.2rem" }} href="#">
                  {item}
                </a>
              </li>
            ))}
            <li className="nav-item mt-3 mt-lg-0 text-nowrap">
              <a
                href="#"
                className="btn book-Nav w-100 w-lg-auto"
                style={{ fontSize: "1.2rem" }}
              >
                Book a Call
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
