// src/Components/Navbar/Navbar.jsx
import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";
import logo from "../../assets/icon.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScroll, setLastScroll] = useState(0);

  // For animated word "Aada" -> "Sites"
  const originalWord = "Aada";
  const targetWord = "Sites";

  const [letters, setLetters] = useState(originalWord.split(""));
  const [animatingIndex, setAnimatingIndex] = useState(-1);

  const closeMenu = () => setIsOpen(false);

  // Hide navbar on scroll down, show on scroll up
  useEffect(() => {
    const handleScroll = () => {
      const current = window.scrollY;

      if (current > lastScroll && current > 80) {
        setShowNavbar(false);
      } else {
        setShowNavbar(true);
      }

      setLastScroll(current);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScroll]);

  // 🔁 Letter-by-letter flip animation Aada → Sites → reset → repeat
  useEffect(() => {
    let timeouts = [];

    const runCycle = () => {
      // Reset to original word
      let currentLetters = originalWord.split("");
      setLetters(currentLetters);
      setAnimatingIndex(-1);

      const orig = originalWord.split("");
      const targ = targetWord.split("");

      let index = 0;

      const animateNextLetter = () => {
        if (index >= orig.length) {
          // Finished all letters → pause showing full "Sites"
          timeouts.push(
            setTimeout(() => {
              runCycle(); // restart cycle
            }, 1200) // pause with "Sites" visible
          );
          return;
        }

        // Start animation for this letter
        setAnimatingIndex(index);

        // Change the letter to target
        currentLetters = [...currentLetters];
        currentLetters[index] = targ[index];
        setLetters(currentLetters);

        // Stop flipping class after flip duration
        timeouts.push(
          setTimeout(() => {
            setAnimatingIndex(-1);

            // Small delay before next letter starts
            timeouts.push(
              setTimeout(() => {
                index += 1;
                animateNextLetter();
              }, 250) // gap between letters
            );
          }, 800) // flip duration for one letter
        );
      };

      // Little delay before starting the first letter
      timeouts.push(setTimeout(animateNextLetter, 600));
    };

    runCycle();

    return () => {
      timeouts.forEach((t) => clearTimeout(t));
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <nav className={`navbar ${showNavbar ? "nav-show" : "nav-hide"}`}>
      <div className="nav-container">

        {/* LOGO WITH PER-LETTER FLIP TEXT */}
        <NavLink to="/" className="logo" onClick={closeMenu}>
          <img src={logo} alt="WebAada Logo" />

          <h2 className="flip-wrapper">
            <span className="brand-static">Web</span>

            <span className="flip-word">
              {letters.map((char, index) => (
                <span
                  key={index}
                  className={
                    "flip-letter" +
                    (animatingIndex === index ? " flip-letter-active" : "")
                  }
                >
                  {char}
                </span>
              ))}
            </span>
          </h2>
        </NavLink>

        {/* Hamburger Menu */}
        <div className="menu-icon" onClick={() => setIsOpen(!isOpen)}>
          <div className={isOpen ? "bar bar1 change" : "bar bar1"}></div>
          <div className={isOpen ? "bar bar2 change" : "bar bar2"}></div>
          <div className={isOpen ? "bar bar3 change" : "bar bar3"}></div>
        </div>

        {/* Desktop Navigation */}
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
