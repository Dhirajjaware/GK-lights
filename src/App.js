import React, { useState } from "react";
import "./App.css";

function App() {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="App">
      <section id="home" className="hero-section">
        <header className="header">
          <nav className="navbar">
            <div className="logo">GK Lights & Truss</div>
            <button
              className="mobile-menu-button"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              <span></span>
              <span></span>
              <span></span>
            </button>
            <ul className={`nav-links ${isMobileMenuOpen ? "mobile" : ""}`}>
              <li>
                <a onClick={() => scrollToSection("home")} href="#home">
                  Home
                </a>
              </li>
              <li>
                <a onClick={() => scrollToSection("about")} href="#about">
                  About
                </a>
              </li>
              <li>
                <a onClick={() => scrollToSection("services")} href="#services">
                  Services
                </a>
              </li>
              <li>
                <a onClick={() => scrollToSection("gallery")} href="#gallery">
                  Gallery
                </a>
              </li>
              <li>
                <a onClick={() => scrollToSection("pricing")} href="#pricing">
                  Pricing
                </a>
              </li>
              <li>
                <a onClick={() => scrollToSection("contact")} href="#contact">
                  Contact
                </a>
              </li>
            </ul>
          </nav>
        </header>
        <div className="hero-content">
          <h1>Professional Truss Rental Services</h1>
          <p>High-quality truss solutions for your events and projects</p>
          <div className="cta-buttons">
            <button className="cta-button primary">Get a Quote</button>
            <button className="cta-button secondary">View Gallery</button>
          </div>
        </div>
        <a
          href="https://wa.me/YOUR_NUMBER"
          className="whatsapp-float"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="whatsapp-icon">WhatsApp</i>
        </a>
      </section>

      <main>
        <section id="about" className="about-section">
          <div className="container">
            <h2>About Us</h2>
            <div className="about-content">
              <div className="about-text">
                <h3>Your Trusted Event Partner</h3>
                <p>
                  Experience in events/weddings with customizable and affordable
                  solutions.
                </p>
                <ul className="features-list">
                  <li>Professional Setup</li>
                  <li>Experienced Team</li>
                  <li>Quality Equipment</li>
                  <li>Competitive Pricing</li>
                </ul>
              </div>
              <div className="about-image">
                {/* Add your about image here */}
              </div>
            </div>
          </div>
        </section>

        <section id="services" className="services-section">
          <div className="container">
            <h2>Our Services</h2>
            <div className="services-grid">
              <div className="service-card">
                <div className="service-image">{/* Add service image */}</div>
                <div className="service-content">
                  <h3>Truss Rental</h3>
                  <p>Flexible rental options for various event sizes</p>
                </div>
              </div>

              <div className="service-card">
                <div className="service-image">{/* Add service image */}</div>
                <div className="service-content">
                  <h3>Delivery & Setup</h3>
                  <p>Professional delivery and installation services</p>
                </div>
              </div>

              <div className="service-card">
                <div className="service-image">{/* Add service image */}</div>
                <div className="service-content">
                  <h3>Technical Support</h3>
                  <p>Expert technical assistance and guidance</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="gallery" className="gallery-section">
          <div className="container">
            <h2>Our Work</h2>
            <div className="gallery-filters">
              <button className="filter-btn active">All</button>
              <button className="filter-btn">Weddings</button>
              <button className="filter-btn">Corporate</button>
              <button className="filter-btn">Birthdays</button>
            </div>
            <div className="gallery-grid">{/* Add gallery images */}</div>
          </div>
        </section>

        <section id="pricing" className="pricing-section">
          <div className="container">
            <h2>Packages</h2>
            <div className="pricing-grid">{/* Add pricing cards */}</div>
          </div>
        </section>

        <section id="contact" className="contact-section">
          <div className="container">
            <h2>Contact Us</h2>
            <div className="contact-container">
              <div className="contact-info">
                <h3>Get in Touch</h3>
                <p>Phone: 9767711480,7350999047</p>
                <p>Email: [Your Email]</p>
                <p>Address: [Your Address]</p>
                <div className="social-links">
                  {/* Add social media links */}
                </div>
              </div>
              <form className="contact-form">
                <input type="text" placeholder="Name" required />
                <input type="email" placeholder="Email" required />
                <input type="text" placeholder="Event Type" required />
                <input type="date" placeholder="Event Date" required />
                <textarea placeholder="Message" required></textarea>
                <button type="submit">Send Message</button>
              </form>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="footer-content">
          <div className="footer-logo">GK Truss</div>
          <div className="social-links">{/* Add social media links */}</div>
          <p>&copy; 2024 GK Truss. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
