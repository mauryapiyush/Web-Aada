import React, { useState } from "react";
import "./Contact.css";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const sendToWhatsApp = (e) => {
    e.preventDefault();

    const { name, email, phone, message } = formData;

    const whatsappNumber = "918097092660"; // Your Number

    const url =
      `https://wa.me/${whatsappNumber}?text=` +
      `*New Website Enquiry from WebAada*%0A%0A` +
      `*Name:* ${name}%0A` +
      `*Email:* ${email}%0A` +
      `*Phone:* ${phone}%0A` +
      `*Message:* ${message}`;

    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <section className="contact-section">
      <h2 className="contact-title">Contact Us</h2>
      <p className="contact-subtitle">
        Get your website today — fast, affordable, and professional.
      </p>

      <div className="contact-container">
        
        {/* Contact Form */}
        <form className="contact-form" onSubmit={sendToWhatsApp}>
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            required
            onChange={handleChange}
          />

          <input
            type="email"
            name="email"
            placeholder="Your Email"
            required
            onChange={handleChange}
          />

          <input
            type="text"
            name="phone"
            placeholder="Your Phone Number"
            required
            onChange={handleChange}
          />

          <textarea
            name="message"
            placeholder="Your Message"
            rows="4"
            onChange={handleChange}
          ></textarea>

          <button type="submit">Send Message</button>
        </form>

        {/* Contact Info */}
        <div className="contact-info">
          <h3>📞 WhatsApp</h3>
          <p>+91 8097092660</p>

          <h3>📧 Email</h3>
          <p>mauryapiyush1011@gmail.com</p>

          <a
            href="https://wa.me/918097092660"
            target="_blank"
            rel="noreferrer"
            className="whatsapp-btn"
          >
            Message on WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
