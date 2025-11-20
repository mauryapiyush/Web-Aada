import React, { useEffect } from "react";
import "./Services.css";
import { servicesData } from "../../Data/Services";

// ⭐ AOS IMPORTS
import AOS from "aos";
import "aos/dist/aos.css";

const Services = () => {

  // ⭐ Initialize AOS on mount
  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: "ease-in-out",
      once: true,
      offset: 50,
    });
  }, []);

  return (
    <section className="services-section">

      {/* MAIN TITLE */}
      <h2 className="services-main-title" data-aos="fade-up">
        Our Services
      </h2>

      <p className="services-subtitle" data-aos="fade-up" data-aos-delay="100">
        Affordable and high-quality web development & digital marketing services.
      </p>

      {/* =============================
          WEBSITE DEVELOPMENT SERVICES
      ============================== */}
      <div className="category-block" data-aos="fade-up">
        <h3 className="category-title">Website Development Services</h3>
        <div className="category-divider"></div>
      </div>

      <div className="services-container">
        {servicesData
          .filter((item) => item.category === "website")
          .map((service, index) => (
            <div
              className="service-card"
              key={index}
              data-aos="zoom-in"
              data-aos-delay={index * 100}
            >
              <div className="service-icon">{service.icon}</div>
              <h3>{service.title}</h3>
              <p>{service.shortDesc}</p>
            </div>
          ))}
      </div>

      {/* =============================
          DIGITAL MARKETING SERVICES
      ============================== */}
      <div className="category-block" data-aos="fade-up">
        <h3 className="category-title">Digital Marketing Services</h3>
        <div className="category-divider"></div>
      </div>

      <div className="services-container">
        {servicesData
          .filter((item) => item.category === "marketing")
          .map((service, index) => (
            <div
              className="service-card"
              key={index}
              data-aos="zoom-in"
              data-aos-delay={index * 100}
            >
              <div className="service-icon">{service.icon}</div>
              <h3>{service.title}</h3>
              <p>{service.shortDesc}</p>
            </div>
          ))}
      </div>

    </section>
  );
};

export default Services;
