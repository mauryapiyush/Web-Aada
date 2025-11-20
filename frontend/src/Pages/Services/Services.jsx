import React from "react";
import "./Services.css";
import { servicesData } from "../../Data/Services";

const Services = () => {
  return (
    <section className="services-section">

      {/* MAIN PAGE TITLE */}
      <h2 className="services-main-title">Our Services</h2>

      <p className="services-subtitle">
        Affordable and high-quality web development & digital marketing services.
      </p>

      {/* ============================
          WEBSITE DEVELOPMENT SERVICES
      ============================ */}
      <h3 className="category-title">Website Development Services</h3>
      <p className="category-subtitle">
        High-quality, fast and modern website solutions for businesses.
      </p>

      <div className="services-container">
        {servicesData
          .filter((item) => item.category === "website")
          .map((service, index) => (
            <div className="service-card" key={index}>
              <div className="service-icon">{service.icon}</div>
              <h3>{service.title}</h3>
              <p>{service.shortDesc}</p>
              <span className="price">{service.price}</span>
            </div>
          ))}
      </div>

      {/* ============================
          DIGITAL MARKETING SERVICES
      ============================ */}
      <h3 className="category-title">Digital Marketing Services</h3>
      <p className="category-subtitle">
        Get more leads and customers with powerful ad campaigns.
      </p>

      <div className="services-container">
        {servicesData
          .filter((item) => item.category === "marketing")
          .map((service, index) => (
            <div className="service-card" key={index}>
              <div className="service-icon">{service.icon}</div>
              <h3>{service.title}</h3>
              <p>{service.shortDesc}</p>
              <span className="price">{service.price}</span>
            </div>
          ))}
      </div>
    </section>
  );
};

export default Services;
