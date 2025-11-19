import React from "react";
import "./Services.css";
import { servicesData } from "../../Data/Services";

const Services = () => {
  return (
    <section className="services-section">
      <h2 className="services-title">Our Services</h2>
      <p className="services-subtitle">
        Affordable and high-quality web development solutions for small businesses.
      </p>

      <div className="services-container">
        {servicesData.map((service, index) => (
          <div className="service-card" key={index}>
            <h3>{service.title}</h3>
            <p>{service.fullDesc}</p>
            <span className="price">{service.price}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
