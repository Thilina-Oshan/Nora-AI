import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "./nav.css"; // Make sure this exists and is correctly linked

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg p-3 fixed-top">
      <div className="container">
        {/* Brand Logo */}
        <a className="navbar-brand" href="#">
          <img src="/src/assets/img/Logo- Colored.svg" alt="Logo" height="40" />
        </a>

        {/* Hamburger Toggler */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Navbar Links */}
        <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
          <ul className="navbar-nav align-items-center text-center">
            <li className="nav-item">
              <a className="nav-link" style={{ fontSize: "1.2rem" }} href="#home">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" style={{ fontSize: "1.2rem" }} href="#abouth">
                About
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" style={{ fontSize: "1.2rem" }} href="#portfolio">
                Projects
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" style={{ fontSize: "1.2rem" }} href="#">
                Services
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" style={{ fontSize: "1.2rem" }} href="#">
                Testimonies
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" style={{ fontSize: "1.2rem" }} href="#">
                Packages
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" style={{ fontSize: "1.2rem" }} href="#">
                Tools
              </a>
            </li>
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
