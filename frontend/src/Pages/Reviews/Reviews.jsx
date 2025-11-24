import React, { useEffect, useState } from "react";
import "./Reviews.css";
import { reviewsData } from "../../Data/Reviews";

import AOS from "aos";
import "aos/dist/aos.css";

const Reviews = () => {
  const [reviews, setReviews] = useState([]);

  const [showForm, setShowForm] = useState(false);
  const [newReview, setNewReview] = useState({
    name: "",
    review: "",
  });

  // Load from localStorage OR fallback to default data
  useEffect(() => {
    const savedReviews = localStorage.getItem("webAadaReviews");

    if (savedReviews) {
      setReviews(JSON.parse(savedReviews));
    } else {
      setReviews(reviewsData);
    }
  }, []);

  // AOS setup
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

  const handleChange = (e) => {
    setNewReview({ ...newReview, [e.target.name]: e.target.value });
  };

  const addReview = (e) => {
    e.preventDefault();

    const updatedReviews = [
      ...reviews,
      { name: newReview.name, review: newReview.review }
    ];

    setReviews(updatedReviews);
    localStorage.setItem("webAadaReviews", JSON.stringify(updatedReviews));

    setNewReview({ name: "", review: "" });
    setShowForm(false);
  };

  // ⭐ Delete Review
  const deleteReview = (indexToDelete) => {
    const updated = reviews.filter((_, index) => index !== indexToDelete);

    setReviews(updated);
    localStorage.setItem("webAadaReviews", JSON.stringify(updated));
  };

  return (
    <section className="testimonials-section">
      <h2 className="testimonials-title" data-aos="fade-up">
        What Our Clients Say
      </h2>

      <p className="testimonials-subtitle" data-aos="fade-up" data-aos-delay="100">
        Trusted by small businesses all over India.
      </p>

      <button
        className="add-review-btn"
        onClick={() => setShowForm(true)}
        data-aos="fade-up"
      >
        + Add Review
      </button>

      {/* POPUP FORM */}
      {showForm && (
        <div className="review-popup">
          <div className="popup-content">
            <h3>Add Your Review</h3>

            <form onSubmit={addReview}>
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                required
                value={newReview.name}
                onChange={handleChange}
              />

              <textarea
                name="review"
                placeholder="Your Review"
                rows="4"
                required
                value={newReview.review}
                onChange={handleChange}
              ></textarea>

              <button type="submit">Submit Review</button>
            </form>

            <button className="close-popup" onClick={() => setShowForm(false)}>
              Close
            </button>
          </div>
        </div>
      )}

      {/* REVIEWS LIST */}
      <div className="testimonials-container">
        {reviews.map((review, index) => (
          <div
            className="test-card"
            key={index}
            data-aos="zoom-in"
            data-aos-delay={index * 120}
          >
            <p className="review-text">“{review.review}”</p>
            <h3>- {review.name}</h3>

            {/* DELETE BUTTON (Only for admin) */}
            <button
              className="delete-review-btn"
              onClick={() => deleteReview(index)}
            >
              Delete
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Reviews;
