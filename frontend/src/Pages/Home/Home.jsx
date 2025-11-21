import React, { useEffect } from "react";
import { Link } from "react-router-dom";

import { servicesData } from "../../Data/Services";
import { portfolioData } from "../../Data/Portfolio";
import { reviewsData } from "../../Data/Reviews";

import "./Home.css";

import heroBG from "../../assets/hero.png";

// ⭐ AOS imports
import AOS from "aos";
import "aos/dist/aos.css";

const Home = () => {
  const shortServices = servicesData.slice(0, 3);
  const shortPortfolio = portfolioData.slice(0, 3);
  const shortReviews = reviewsData.slice(0, 3);

  // ⭐ Initialize AOS
  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: "ease-in-out",
      once: false,   // 🔥 repeat animation
      mirror: true,  // 🔥 animate on scroll-up
      offset: 50,
    });

    AOS.refresh();
  }, []);

  return (
    <>
      {/* HERO */}
      <section
        className="new-hero"
        style={{ backgroundImage: `url(${heroBG})` }}
      >
        <div className="hero-overlay">
          <div className="hero-content" data-aos="fade-up">
            <h1 className="hero-title">
              Build Your <span>Professional Website</span>
            </h1>

            <p className="hero-subtitle">
              Fast, modern & responsive websites for small businesses — starting at just
              <strong> ₹1999</strong>
            </p>

            <div className="hero-buttons">
              <Link to="/contact" className="btn-hero-primary">Get Your Website</Link>
              <Link to="/portfolio" className="btn-hero-secondary">View Portfolio</Link>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="home-section">
        <h2 className="section-title" data-aos="fade-up">Our Services</h2>

        <div className="card-wrapper">
          {shortServices.map((item, index) => (
            <div
              className="card-box"
              key={index}
              data-aos="zoom-in"
              data-aos-delay={index * 120}
            >
              <h3>{item.title}</h3>
              <p>{item.shortDesc}</p>
            </div>
          ))}
        </div>

        <Link to="/services" className="view-more-btn" data-aos="fade-up">
          View All Services
        </Link>
      </section>

      {/* PORTFOLIO */}
      <section className="home-section">
        <h2 className="section-title" data-aos="fade-up">Our Portfolio</h2>

        <div className="card-wrapper">
          {shortPortfolio.map((item, index) => (
            <div
              className="card-box"
              key={index}
              data-aos="zoom-in"
              data-aos-delay={index * 120}
            >
              <img src={item.image} alt={item.title} />
              <h3>{item.title}</h3>
            </div>
          ))}
        </div>

        <Link to="/portfolio" className="view-more-btn" data-aos="fade-up">
          View Full Portfolio
        </Link>
      </section>

      {/* WHY */}
      <section className="home-section">
        <h2 className="section-title" data-aos="fade-up">Why Choose WebAada?</h2>

        <ul className="why-list" data-aos="fade-up">
          <li>Affordable Websites</li>
          <li>Fast Delivery</li>
          <li>Modern Designs</li>
        </ul>

        <Link to="/why" className="view-more-btn" data-aos="fade-up">
          Why Choose Me
        </Link>
      </section>

      {/* REVIEWS */}
      <section className="home-section">
        <h2 className="section-title" data-aos="fade-up">Client Reviews</h2>

        <div className="card-wrapper">
          {shortReviews.map((review, index) => (
            <div
              className="card-box"
              key={index}
              data-aos="zoom-in"
              data-aos-delay={index * 120}
            >
              <p>"{review.review}"</p>
              <h4>- {review.name}</h4>
            </div>
          ))}
        </div>

        <Link to="/reviews" className="view-more-btn" data-aos="fade-up">
          Read All Reviews
        </Link>
      </section>

      {/* CONTACT CTA */}
      <section className="contact-cta" data-aos="fade-up">
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
