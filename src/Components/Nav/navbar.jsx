import React, { useState } from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "./nav.css";

const Navbar = () => {
  const [expanded, setExpanded] = useState(false);

  const toggleNavbar = () => {
    setExpanded(!expanded);
  };

  const handleNavClick = () => {
    setExpanded(false); // Collapse on mobile when clicking a link
  };

  const navLinks = [
    { name: "Home", to: "/" },
    { name: "About", to: "/about" },
    { name: "Projects", to: "/projects" },
    { name: "Services", to: "/services" },
    { name: "Testimonials", to: "/testimonials" },
    { name: "Blog", to: "/blog" },
    { name: "Newsletter", to: "/newsletter" },
  ];

  return (
    <nav className="navbar navbar-expand-lg fixed-top p-3 bg-dark shadow-sm">
      <div className="container">
        <Link className="navbar-brand text-white" to="/" onClick={handleNavClick}>
          <img src="/src/assets/img/Logo- Colored.svg" alt="Logo" height="40" />
        </Link>

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

        <div className={`collapse navbar-collapse justify-content-end ${expanded ? "show" : ""}`} id="navbarNav">
          <ul className="navbar-nav align-items-center text-center w-100">
            {navLinks.map((item, i) => (
              <li className="nav-item" key={i}>
                <Link
                  className="nav-link text-white mx-2"
                  to={item.to}
                  onClick={handleNavClick}
                  style={{ fontSize: "1.1rem" }}
                >
                  {item.name}
                </Link>
              </li>
            ))}

            <li className="nav-item mt-3 mt-lg-0">
              <Link
                to="/contact"
                className="btn book-Nav ms-lg-3 px-4 w-100 w-lg-auto"
                style={{ fontSize: "1.1rem" }}
                onClick={handleNavClick}
              >
                Book a Call
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
