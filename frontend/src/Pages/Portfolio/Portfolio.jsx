import React, { useEffect } from "react";
import "./Portfolio.css";
import { portfolioData } from "../../Data/Portfolio";

// ⭐ AOS imports
import AOS from "aos";
import "aos/dist/aos.css";

const Portfolio = () => {

  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: "ease-in-out",
      once: false,   // repeat animations
      mirror: true,  // animate scroll up
      offset: 50,
    });

    AOS.refresh();
  }, []);

  return (
    <section className="portfolio-section">
      <h2 className="portfolio-title" data-aos="fade-up">
        Our Work
      </h2>

      <p className="portfolio-subtitle" data-aos="fade-up" data-aos-delay="100">
        Here are some websites we have developed for our clients.
      </p>

      <div className="portfolio-container">
        {portfolioData.map((project, index) => (
          <a
            key={index}
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="portfolio-card"
            data-aos="zoom-in"
            data-aos-delay={index * 120}
          >
            <img src={project.image} alt={project.title} />
            <h3>{project.title}</h3>
          </a>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
