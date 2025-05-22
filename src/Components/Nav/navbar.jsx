import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "./nav.css";

const Navbar = () => {
  const [expanded, setExpanded] = useState(false);

  const toggleNavbar = () => {
    setExpanded(!expanded);
  };

  const handleNavClick = () => {
    setExpanded(false); // Collapse navbar on link click (mobile)
  };

  return (
    <nav className="navbar navbar-expand-lg fixed-top p-3 shadow-sm bg-dark">
      <div className="container">
        {/* Logo */}
        <a className="navbar-brand text-white" href="#hero" onClick={handleNavClick}>
          <img src="/src/assets/img/Logo- Colored.svg" alt="Logo" height="40" />
        </a>

        {/* Toggle Button */}
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

        {/* Links */}
        <div className={`collapse navbar-collapse justify-content-end ${expanded ? "show" : ""}`} id="navbarNav">
          <ul className="navbar-nav align-items-center text-center">
            {[
              { name: "Home", href: "#hero" },
              { name: "About", href: "#about" },
              { name: "Projects", href: "#projects" },
              { name: "Services", href: "#services" },
              { name: "Testimonials", href: "#tesmo" },
              { name: "Packages", href: "#packages" },
              { name: "Tools", href: "#tools" },
            ].map((item, i) => (
              <li className="nav-item" key={i}>
                <a
                  className="nav-link text-white mx-2"
                  style={{ fontSize: "1.1rem" }}
                  href={item.href}
                  onClick={handleNavClick}s
                >
                  {item.name}
                </a>
              </li>
            ))}
            {/* CTA Button */}
            <li className="nav-item mt-3 mt-lg-0">
              <a
                href="#contact"
                className="btn  book-Nav text-white ms-lg-3 px-4book-Nav w-100 w-lg-auto"
                style={{ fontSize: "1.2rem" }}
                onClick={handleNavClick}
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
