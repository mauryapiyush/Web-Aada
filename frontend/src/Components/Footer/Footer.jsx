import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";
import logo from "../../assets/logo.png";

// Icons
import { FaWhatsapp, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">

        {/* Left - Logo & About */}
        <div className="footer-section about">
          <div className="footer-logo">
            <img src={logo} alt="WebAada Logo" />
            <h2>WebAada</h2>
          </div>

          <p>
            Affordable, modern & high-quality websites for small businesses.  
            Built with passion & delivered with perfection.
          </p>

          {/* Social Icons */}
          <div className="social-icons">
            <a 
              href="https://wa.me/918097092660" 
              target="_blank" 
              rel="noreferrer"
            >
              <FaWhatsapp className="social-icon whatsapp" />
            </a>

            <a 
              href="https://instagram.com/"   /* Add your IG username */
              target="_blank" 
              rel="noreferrer"
            >
              <FaInstagram className="social-icon instagram" />
            </a>
          </div>
        </div>

        {/* Middle - Quick Links */}
        <div className="footer-section links">
          <h3>Quick Links</h3>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/services">Services</Link></li>
            <li><Link to="/portfolio">Portfolio</Link></li>
            <li><Link to="/why">Why Us</Link></li>
            <li><Link to="/reviews">Reviews</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </div>

        {/* Right - Contact */}
        <div className="footer-section contact">
          <h3>Contact</h3>
          <p>📞 +91 8097092660</p>
          <p>📧 mauryapiyush1011@gmail.com</p>

          <a 
            href="https://wa.me/918097092660"
            target="_blank"
            rel="noreferrer"
            className="footer-whatsapp"
          >
            Chat on WhatsApp
          </a>
        </div>

      </div>

      <div className="footer-bottom">
        © {new Date().getFullYear()} WebAada — All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
