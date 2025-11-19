import React from "react";
import "./WhyChooseUs.css";
import { whyChooseUsData } from "../../Data/WhyChooseUs";

const WhyChooseUs = () => {
  return (
    <section className="why-section">
      <h2 className="why-title">Why Choose WebAada?</h2>
      <p className="why-subtitle">
        We deliver affordable and high-quality websites that help your business grow.
      </p>

      <div className="why-container">
        {whyChooseUsData.map((item, index) => (
          <div className="why-card" key={index}>
            <h3>{item.title}</h3>
            <p>{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WhyChooseUs;
