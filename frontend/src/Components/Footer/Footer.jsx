import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "./Footer.css";
import logo from "../../assets/logo.png";

// Icons
import { FaWhatsapp, FaInstagram } from "react-icons/fa";

// AOS
import AOS from "aos";
import "aos/dist/aos.css";

const Footer = () => {

  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: "ease-in-out",
      once: false,     // 👈 animate again on re-scroll
      mirror: true,    // 👈 animate when scrolling up
      offset: 20,
    });

    AOS.refresh();
  }, []);

  return (
    <footer className="footer" data-aos="fade-up">

      <div className="footer-container">

        {/* Left */}
        <div className="footer-section about" data-aos="fade-up">
          <div className="footer-logo">
            <img src={logo} alt="WebAada Logo" />
            <h2>WebAada</h2>
          </div>

          <p>
            Affordable, modern & high-quality websites for small businesses.
            Built with passion & delivered with perfection.
          </p>

          <div className="social-icons">
            <a href="https://wa.me/918097092660" target="_blank" rel="noreferrer">
              <FaWhatsapp className="social-icon whatsapp" />
            </a>
            <a href="https://instagram.com/" target="_blank" rel="noreferrer">
              <FaInstagram className="social-icon instagram" />
            </a>
          </div>
        </div>

        {/* Links */}
        <div className="footer-section links" data-aos="fade-up" data-aos-delay="150">
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

        {/* Contact */}
        <div className="footer-section contact" data-aos="fade-up" data-aos-delay="300">
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

      <div className="footer-bottom" data-aos="fade-up" data-aos-delay="400">
        © {new Date().getFullYear()} WebAada — All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
