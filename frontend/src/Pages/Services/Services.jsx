import React, { useEffect } from "react";
import "./Services.css";
import { servicesData } from "../../Data/Services";

import AOS from "aos";
import "aos/dist/aos.css";

const Services = () => {

  useEffect(() => {
    AOS.init({
      duration: 700,
      easing: "ease-in-out",
      once: false,         // <-- animate every time
      mirror: true,        // <-- animate when scrolling up
      offset: 100,         // <-- fixes grid issue
      anchorPlacement: "top-bottom"
    });

    AOS.refresh();
  }, []);

  return (
    <section className="services-section">

      <h2 className="services-main-title" data-aos="fade-up">
        Our Services
      </h2>

      <p className="services-subtitle" data-aos="fade-up">
        Affordable and high-quality web development & digital marketing services.
      </p>

      {/* WEBSITE DEVELOPMENT */}
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
              data-aos="zoom-in-up"
              data-aos-delay={index * 120}
            >
              <div className="service-icon">{service.icon}</div>
              <h3>{service.title}</h3>
              <p>{service.shortDesc}</p>
            </div>
          ))}
      </div>

      {/* MARKETING */}
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
              data-aos="zoom-in-up"
              data-aos-delay={index * 120}
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
