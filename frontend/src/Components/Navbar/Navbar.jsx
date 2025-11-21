import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";
import logo from "../../assets/logo.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScroll, setLastScroll] = useState(0);

  const closeMenu = () => setIsOpen(false);

  // 🔥 Hide navbar on scroll down → Show on scroll up
  useEffect(() => {
    const handleScroll = () => {
      const current = window.scrollY;

      if (current > lastScroll && current > 80) {
        setShowNavbar(false); // scrolling down
      } else {
        setShowNavbar(true); // scrolling up
      }

      setLastScroll(current);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScroll]);

  return (
    <nav className={`navbar ${showNavbar ? "nav-show" : "nav-hide"}`}>
      <div className="nav-container">

        {/* Logo */}
        <NavLink to="/" className="logo" onClick={closeMenu}>
          <img src={logo} alt="WebAada Logo" />
          <h2>WebAada</h2>
        </NavLink>

        {/* Hamburger Icon */}
        <div className="menu-icon" onClick={() => setIsOpen(!isOpen)}>
          <div className={isOpen ? "bar bar1 change" : "bar bar1"}></div>
          <div className={isOpen ? "bar bar2 change" : "bar bar2"}></div>
          <div className={isOpen ? "bar bar3 change" : "bar bar3"}></div>
        </div>

        {/* Desktop Links */}
        <ul className="nav-links">
          <li><NavLink to="/" end>Home</NavLink></li>
          <li><NavLink to="/services">Services</NavLink></li>
          <li><NavLink to="/portfolio">Portfolio</NavLink></li>
          <li><NavLink to="/why">Why Us</NavLink></li>
          <li><NavLink to="/reviews">Reviews</NavLink></li>
          <li><NavLink to="/contact">Contact</NavLink></li>
        </ul>

        <NavLink to="/contact" className="nav-btn">Get Website</NavLink>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="mobile-menu slide-down">
          <NavLink to="/" end onClick={closeMenu}>Home</NavLink>
          <NavLink to="/services" onClick={closeMenu}>Services</NavLink>
          <NavLink to="/portfolio" onClick={closeMenu}>Portfolio</NavLink>
          <NavLink to="/why" onClick={closeMenu}>Why Us</NavLink>
          <NavLink to="/reviews" onClick={closeMenu}>Reviews</NavLink>
          <NavLink to="/contact" onClick={closeMenu}>Contact</NavLink>

          <NavLink to="/contact" className="mobile-btn" onClick={closeMenu}>
            Get Website
          </NavLink>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
