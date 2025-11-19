import React from "react";
import "./Reviews.css";
import { reviewsData } from "../../Data/Reviews";

const Reviews = () => {
  return (
    <section className="testimonials-section">
      <h2 className="testimonials-title">What Our Clients Say</h2>
      <p className="testimonials-subtitle">
        Trusted by small businesses all over India.
      </p>

      <div className="testimonials-container">
        {reviewsData.map((review, index) => (
          <div className="test-card" key={index}>
            <p className="review-text">“{review.review}”</p>
            <h3>- {review.name}</h3>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Reviews;
