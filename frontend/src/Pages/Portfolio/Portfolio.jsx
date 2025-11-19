import React from "react";
import "./Portfolio.css";
import { portfolioData } from "../../Data/Portfolio";

const Portfolio = () => {
  return (
    <section className="portfolio-section">
      <h2 className="portfolio-title">Our Work</h2>
      <p className="portfolio-subtitle">
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
