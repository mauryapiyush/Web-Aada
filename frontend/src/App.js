// src/App.js
import React, { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Components
import Navbar from "./Components/Navbar/Navbar";
import Footer from "./Components/Footer/Footer";

// Pages
import Home from "./Pages/Home/Home";
import Services from "./Pages/Services/Services";
import Portfolio from "./Pages/Portfolio/Portfolio";
import WhyChooseUs from "./Pages/WhyChooseUs/WhyChooseUs";
import Reviews from "./Pages/Reviews/Reviews";
import Contact from "./Pages/Contact/Contact";

import "./App.css";

// ⭐ AOS Animation Imports
import AOS from "aos";
import "aos/dist/aos.css";

function App() {

  // ⭐ Initialize AOS Animations
  useEffect(() => {
    AOS.init({
      duration: 800,   // controls speed of animation
      easing: "ease-in-out",
      once: true,      // animation happens only once
      offset: 50,      // delay before animation triggers
    });
  }, []);

  return (
    <BrowserRouter>
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
