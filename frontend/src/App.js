// src/App.js
import React, { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./Components/Navbar/Navbar";
import Footer from "./Components/Footer/Footer";

// Pages
import Home from "./Pages/Home/Home";
import Services from "./Pages/Services/Services";
import Portfolio from "./Pages/Portfolio/Portfolio";
import WhyChooseUs from "./Pages/WhyChooseUs/WhyChooseUs";
import Reviews from "./Pages/Reviews/Reviews";
import Contact from "./Pages/Contact/Contact";

import ScrollToTop from "./Components/ScrollToTop/ScrollToTop";   // ⭐ ADD THIS
import "./App.css";

// AOS
import AOS from "aos";
import "aos/dist/aos.css";

function App() {

  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: "ease-in-out",
      once: false,
      offset: 50,
    });
  }, []);

  return (
    <BrowserRouter>

      <ScrollToTop /> {/* ⭐ FIXES FOOTER CUTTING ISSUE */}

      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/why" element={<WhyChooseUs />} />
        <Route path="/reviews" element={<Reviews />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>

      <Footer />

    </BrowserRouter>
  );
}

export default App;
