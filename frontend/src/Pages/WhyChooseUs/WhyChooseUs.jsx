import React, { useEffect } from "react";
import "./WhyChooseUs.css";
import { whyChooseUsData } from "../../Data/WhyChooseUs";

// ⭐ AOS imports
import AOS from "aos";
import "aos/dist/aos.css";

const WhyChooseUs = () => {

  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: "ease-in-out",
      once: false,   // repeat animation
      mirror: true,  // animate on scroll-up
      offset: 60,
    });

    AOS.refresh();
  }, []);

  return (
    <section className="why-section">
      <h2 className="why-title" data-aos="fade-up">
        Why Choose WebAada?
      </h2>

      <p className="why-subtitle" data-aos="fade-up" data-aos-delay="100">
        We deliver affordable and high-quality websites that help your business grow.
      </p>

      <div className="why-container">
        {whyChooseUsData.map((item, index) => (
          <div
            className="why-card"
            key={index}
            data-aos="zoom-in"
            data-aos-delay={index * 120}
          >
            <h3>{item.title}</h3>
            <p>{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WhyChooseUs;
