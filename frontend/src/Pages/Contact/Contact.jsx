import React, { useEffect, useState } from "react";
import "./Contact.css";

// AOS Animation
import AOS from "aos";
import "aos/dist/aos.css";

// Icons
import { FaWhatsapp, FaEnvelope, FaPhone } from "react-icons/fa";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  // Initialize AOS
  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: "ease-in-out",
      once: false,
      mirror: true,
    });
    AOS.refresh();
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const sendToWhatsApp = (e) => {
    e.preventDefault();
    const { name, email, phone, message } = formData;

    const whatsappNumber = "918097092660";

    const url =
      `https://wa.me/${whatsappNumber}?text=` +
      `*New Website Enquiry from WebAada*%0A%0A` +
      `*Name:* ${name}%0A` +
      `*Email:* ${email}%0A` +
      `*Phone:* ${phone}%0A` +
      `*Message:* ${message}`;

    window.open(url, "_blank");
  };

  return (
    <section className="contact-section">

      {/* Title */}
      <h2 className="contact-title" data-aos="fade-up">Contact Us</h2>
      <div className="divider" data-aos="fade-up"></div>

      <p className="contact-subtitle" data-aos="fade-up" data-aos-delay="100">
        Get your website today — fast, affordable, and professional.
      </p>

      <div className="contact-container">

        {/* FORM */}
        <form
          className="contact-form"
          onSubmit={sendToWhatsApp}
          data-aos="zoom-in"
          data-aos-delay="200"
        >
          <input type="text" name="name" placeholder="Your Name" required onChange={handleChange} />
          <input type="email" name="email" placeholder="Your Email" required onChange={handleChange} />
          <input type="text" name="phone" placeholder="Your Phone Number" required onChange={handleChange} />
          <textarea name="message" rows="4" placeholder="Your Message" onChange={handleChange}></textarea>

          <button type="submit">Send Message</button>
        </form>

        {/* CONTACT INFO */}
        <div className="contact-info" data-aos="zoom-in" data-aos-delay="300">
          <h3><FaPhone /> Phone</h3>
          <p>+91 8097092660</p>

          <h3><FaEnvelope /> Email</h3>
          <p>mauryapiyush1011@gmail.com</p>

          <a
            href="https://wa.me/918097092660"
            target="_blank"
            rel="noreferrer"
            className="whatsapp-btn"
          >
            <FaWhatsapp /> Message on WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
