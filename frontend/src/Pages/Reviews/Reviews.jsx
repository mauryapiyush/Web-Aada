import React, { useEffect, useState } from "react";
import "./Reviews.css";
import { reviewsData } from "../../Data/Reviews";

import AOS from "aos";
import "aos/dist/aos.css";

const Reviews = () => {
  const [reviews, setReviews] = useState([]);

  const [showForm, setShowForm] = useState(false);
  const [showPasswordBox, setShowPasswordBox] = useState(false);

  const [adminMode, setAdminMode] = useState(false);

  const [passwordInput, setPasswordInput] = useState("");
  const ADMIN_PASSWORD = "webaada123";

  const [newReview, setNewReview] = useState({
    name: "",
    review: "",
  });

  // Load reviews & admin state
  useEffect(() => {
    const savedReviews = localStorage.getItem("webAadaReviews");
    const savedAdmin = localStorage.getItem("webAadaAdmin");

    if (savedReviews) {
      setReviews(JSON.parse(savedReviews));
    } else {
      setReviews(reviewsData);
    }

    if (savedAdmin === "true") {
      setAdminMode(true);
    }
  }, []);

  // AOS setup
  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: "ease-in-out",
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
      { name: newReview.name, review: newReview.review },
    ];

    setReviews(updatedReviews);
    localStorage.setItem("webAadaReviews", JSON.stringify(updatedReviews));

    setNewReview({ name: "", review: "" });
    setShowForm(false);
  };

  const deleteReview = (indexToDelete) => {
    const updated = reviews.filter((_, index) => index !== indexToDelete);

    setReviews(updated);
    localStorage.setItem("webAadaReviews", JSON.stringify(updated));
  };

  const checkPassword = () => {
    if (passwordInput === ADMIN_PASSWORD) {
      setAdminMode(true);
      localStorage.setItem("webAadaAdmin", "true");
      setShowPasswordBox(false);
      setPasswordInput("");
      alert("Admin mode activated!");
    } else {
      alert("Wrong password!");
    }
  };

  const logoutAdmin = () => {
    setAdminMode(false);
    localStorage.removeItem("webAadaAdmin");
    alert("Admin logged out!");
  };

  return (
    <section className="testimonials-section">
      
      {/* ADMIN BADGE */}
      {adminMode && (
        <div className="admin-badge" data-aos="fade-down">
          🔐 Admin Mode Active
        </div>
      )}

      <h2 className="testimonials-title" data-aos="fade-up">
        What Our Clients Say
      </h2>

      <p className="testimonials-subtitle" data-aos="fade-up" data-aos-delay="100">
        Trusted by small businesses all over India.
      </p>

      {/* BUTTONS */}
      <div className="top-buttons" data-aos="fade-up" data-aos-delay="200">
        <button className="btn-main" onClick={() => setShowForm(true)}>
          + Add Review
        </button>

        {!adminMode && (
          <button className="btn-white" onClick={() => setShowPasswordBox(true)}>
            Admin Login
          </button>
        )}

        {adminMode && (
          <button className="btn-white" onClick={logoutAdmin}>
            Logout
          </button>
        )}
      </div>

      {/* PASSWORD POPUP */}
      {showPasswordBox && (
        <div className="review-popup">
          <div className="popup-content">
            <h3>Enter Admin Password</h3>

            <input
              type="password"
              placeholder="Enter password"
              value={passwordInput}
              onChange={(e) => setPasswordInput(e.target.value)}
            />

            <button className="btn-main" onClick={checkPassword}>
              Unlock
            </button>

            <button className="close-popup" onClick={() => setShowPasswordBox(false)}>
              Cancel
            </button>
          </div>
        </div>
      )}

      {/* ADD REVIEW POPUP */}
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

              <button type="submit" className="btn-main">
                Submit Review
              </button>
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
            data-aos-delay={index * 150}
          >
            <p className="review-text">“{review.review}”</p>
            <h3>- {review.name}</h3>

            {adminMode && (
              <button className="delete-review-btn" onClick={() => deleteReview(index)}>
                Delete
              </button>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Reviews;
