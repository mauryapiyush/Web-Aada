// src/Pages/Home/Home.jsx

import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { servicesData } from "../../Data/Services";
import { portfolioData } from "../../Data/Portfolio";
import { reviewsData } from "../../Data/Reviews";
import "./Home.css";
import heroBG from "../../assets/hero.png";

// AOS
import AOS from "aos";
import "aos/dist/aos.css";

const PRICE_DIGITS = [1, 9, 9, 9];

const Home = () => {
  const shortServices = servicesData.slice(0, 3);
  const shortPortfolio = portfolioData.slice(0, 3);
  const shortReviews = reviewsData.slice(0, 3);

  const [digits, setDigits] = useState(PRICE_DIGITS);
  const [rollingIndex, setRollingIndex] = useState(-1);

  // AOS init
  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: "ease-in-out",
      once: false,
      mirror: true,
      offset: 50,
    });
    AOS.refresh();
  }, []);

  // Slot-machine number animation
  useEffect(() => {
    let timeouts = [];

    const runCycle = () => {
      setDigits([0, 0, 0, 0]);
      setRollingIndex(-1);

      let i = 0;

      const animateDigit = () => {
        if (i >= PRICE_DIGITS.length) {
          timeouts.push(
            setTimeout(() => {
              runCycle();
            }, 2000)
          );
          return;
        }

        let spins = 0;

        const spinOnce = () => {
          setRollingIndex(i);
          setDigits((prev) => {
            const next = [...prev];
            next[i] = Math.floor(Math.random() * 10);
            return next;
          });

          spins++;

          if (spins < 10) {
            timeouts.push(setTimeout(spinOnce, 90));
          } else {
            setDigits((prev) => {
              const next = [...prev];
              next[i] = PRICE_DIGITS[i];
              return next;
            });

            timeouts.push(
              setTimeout(() => {
                setRollingIndex(-1);
                i += 1;
                animateDigit();
              }, 300)
            );
          }
        };

        timeouts.push(setTimeout(spinOnce, 250));
      };

      timeouts.push(setTimeout(animateDigit, 400));
    };

    runCycle();

    return () => {
      timeouts.forEach((t) => clearTimeout(t));
    };
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

            {/* TEXT LINE */}
            <p className="hero-subtitle">
              Fast, modern & responsive websites for small businesses —
              <br />
              <span className="subtitle-small">starting at just</span>
            </p>

            {/* PRICE SLOT MACHINE */}
            <div
              className="hero-price-row"
              data-aos="zoom-in"
              data-aos-delay="150"
            >
              <span className="price-currency">₹</span>

              {digits.map((d, i) => (
                <span key={i} className="price-digit-box">
                  <span
                    className={
                      "price-digit" +
                      (rollingIndex === i ? " price-digit-rolling" : "")
                    }
                  >
                    {d}
                  </span>
                </span>
              ))}
            </div>

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

      {/* SERVICES */}
      <section className="home-section">
        <h2 className="section-title" data-aos="fade-up">
          Our Services
        </h2>

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
        <h2 className="section-title" data-aos="fade-up">
          Our Portfolio
        </h2>

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
        <h2 className="section-title" data-aos="fade-up">
          Why Choose WebAada?
        </h2>

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
        <h2 className="section-title" data-aos="fade-up">
          Client Reviews
        </h2>

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
          <Link to="/contact" className="cta-primary">
            Contact Us
          </Link>

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
