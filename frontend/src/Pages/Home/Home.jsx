import React from "react";
import { Link } from "react-router-dom";

// Data
import { servicesData } from "../../Data/Services";
import { portfolioData } from "../../Data/Portfolio";
import { reviewsData } from "../../Data/Reviews";

import "./Home.css";

// 🔵 Add your hero background image here
import heroBG from "../../assets/hero.png";   // make sure this image exists in assets folder

const Home = () => {
  const shortServices = servicesData.slice(0, 3);
  const shortPortfolio = portfolioData.slice(0, 3);
  const shortReviews = reviewsData.slice(0, 3);

  return (
    <>
      {/* ⭐ NEW MODERN HERO SECTION */}
      <section 
        className="new-hero"
        style={{ backgroundImage: `url(${heroBG})` }}
      >
        <div className="hero-overlay">
          <div className="hero-content">
            <h1 className="hero-title">
              Build Your  
              <span> Professional Website</span>
            </h1>

            <p className="hero-subtitle">
              Fast, modern & responsive websites for small businesses — starting at just  
              <strong> ₹1499</strong>
            </p>

            <div className="hero-buttons">
              <Link to="/contact" className="btn-hero-primary">
                Get Your Website
              </Link>

              <Link to="/portfolio" className="btn-hero-secondary">
                View Portfolio
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="home-section">
        <h2 className="section-title">Our Services</h2>
        <div className="preview-container">
          {shortServices.map((item, index) => (
            <div className="preview-card" key={index}>
              <h3>{item.title}</h3>
              <p>{item.shortDesc}</p>
            </div>
          ))}
        </div>
        <Link to="/services" className="view-more-btn">View All Services</Link>
      </section>

      {/* Portfolio */}
      <section className="home-section">
        <h2 className="section-title">Our Portfolio</h2>
        <div className="preview-container">
          {shortPortfolio.map((item, index) => (
            <div className="preview-card" key={index}>
              <img src={item.image} alt={item.title} />
              <h3>{item.title}</h3>
            </div>
          ))}
        </div>
        <Link to="/portfolio" className="view-more-btn">View Full Portfolio</Link>
      </section>

      {/* Why Us */}
      <section className="home-section">
        <h2 className="section-title">Why Choose WebAada?</h2>
        <ul className="why-list">
          <li>Affordable Websites</li>
          <li>Fast Delivery</li>
          <li>Modern Designs</li>
        </ul>
        <Link to="/why" className="view-more-btn">Why Choose Me</Link>
      </section>

      {/* Reviews */}
      <section className="home-section">
        <h2 className="section-title">Client Reviews</h2>
        <div className="preview-container">
          {shortReviews.map((r, index) => (
            <div className="preview-card" key={index}>
              <p>"{r.review}"</p>
              <h4>- {r.name}</h4>
            </div>
          ))}
        </div>
        <Link to="/reviews" className="view-more-btn">Read All Reviews</Link>
      </section>

      {/* Contact CTA */}
      <section className="contact-cta">
        <h2>Let's Build Your Website</h2>
        <p>Fast, affordable & professional websites for your business.</p>

        <div className="cta-buttons">
          <Link to="/contact" className="cta-primary">Contact Us</Link>

          <a
            href="https://wa.me/918097092660"
            target="_blank"
            rel="noreferrer"
            className="cta-whatsapp"
          >
            Chat on WhatsApp
          </a>
        </div>
      </section>
    </>
  );
};

export default Home;
