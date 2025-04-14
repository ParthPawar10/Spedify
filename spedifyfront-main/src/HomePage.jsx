import React from "react";
import "./HomePage.css"; // Import external CSS file for component-specific styles
import logo from "./Logo.png"; // Update the path as needed
import { Link } from "react-router-dom";


const HomePage = () => {
  return (
    <div>
      {/* Header */}
      <header style={styles.header}>
        <img src={logo} alt="Spedify Logo" />
        <h1 style={styles.title}>Spedify</h1>
        <nav style={styles.nav}>
          <a href="/about" style={styles.navLink}>About Us</a>
          <a href="/product" style={styles.navLink}>Products</a>
        </nav>
      </header>

      {/* Hero Section */}
      <div style={styles.hero}>
        <h1 style={styles.heroTitle}>
          Discover the Best in Electronics, Cosmetics, Clothes, and Groceries!
        </h1>
        <p style={styles.heroText}>
          Explore an extensive range of products designed to enhance your
          lifestyle. From the latest gadgets and beauty essentials to fashion
          trends and fresh groceries, find everything you need in one place.
        </p>
        <a href="/login" style={styles.btn}>Start Now</a>
      </div>

      {/* Features Section */}
      <div id="features" style={styles.features}>
        <div style={styles.featureItem}>
          <h2 style={styles.featureTitle}>Electronics</h2>
          <p style={styles.featureText}>
            Discover the latest in cutting-edge electronics. From smartphones
            and laptops to smart home devices, we have everything to keep you
            connected and up-to-date with the newest technology.
          </p>
        </div>
        <div style={styles.featureItem}>
          <h2 style={styles.featureTitle}>Cosmetics</h2>
          <p style={styles.featureText}>
            Enhance your beauty with a premium range of cosmetics. Explore
            skincare, makeup, and personal care products designed to make you
            look and feel your best.
          </p>
        </div>
        <div style={styles.featureItem}>
          <h2 style={styles.featureTitle}>Clothes</h2>
          <p style={styles.featureText}>
            Refresh your wardrobe with a stylish collection of clothes. Whether
            you're looking for the latest trends or classic essentials, find
            everything you need to express your personal style.
          </p>
        </div>
        <div style={styles.featureItem}>
          <h2 style={styles.featureTitle}>Groceries</h2>
          <p style={styles.featureText}>
            Stock up on fresh and quality groceries with a wide selection of food
            and household essentials. From organic produce to everyday staples,
            we've got all your grocery needs covered.
          </p>
        </div>
      </div>
    </div>
  );
};

// Inline styles
const styles = {
  header: {
    display: "flex",
    alignItems: "center",
    padding: "15px 30px",
    backgroundColor: "#1e1e1e",
    boxShadow: "0 2px 5px rgba(0, 0, 0, 0.3)",
    borderBottom: "2px solid #ffffff",
  },
  logo: {
    width: "100px",
    borderRadius: "5px",
  },
  title: {
    fontSize: "1.8rem",
    marginLeft: "0.5rem",
    color: "#f5f5f5",
  },
  nav: {
    display: "flex",
    marginLeft: "auto",
  },
  navLink: {
    color: "#f5f5f5",
    textDecoration: "none",
    margin: "0 1rem",
    fontSize: "1rem",
    padding: "0.5rem 0",
    transition: "color 0.3s ease",
  },
  hero: {
    background: "#1e1e1e",
    color: "#f5f5f5",
    padding: "4rem 2rem",
    textAlign: "center",
    marginBottom: "2rem",
    borderRadius: "10px",
    boxShadow: "0 2px 8px rgba(0, 0, 0, 0.3)",
  },
  heroTitle: {
    fontSize: "2.5rem",
    marginBottom: "1rem",
    fontWeight: "bold",
  },
  heroText: {
    fontSize: "1.2rem",
    marginBottom: "2rem",
    maxWidth: "800px",
    margin: "auto",
    color: "#ccc",
  },
  btn: {
    display: "inline-block",
    padding: "0.6rem 1.5rem",
    fontSize: "1rem",
    textDecoration: "none",
    borderRadius: "5px",
    backgroundColor: "#ff6f61",
    color: "#121212",
    transition: "background 0.3s ease",
  },
  features: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
    gap: "1.5rem",
    padding: "2rem",
  },
  featureItem: {
    background: "#1e1e1e",
    color: "#f5f5f5",
    padding: "1.5rem",
    borderRadius: "5px",
    boxShadow: "0 2px 5px rgba(0, 0, 0, 0.3)",
    transition: "transform 0.3s ease",
  },
  featureTitle: {
    fontSize: "1.4rem",
    marginBottom: "0.75rem",
    color: "#ff6f61",
  },
  featureText: {
    fontSize: "0.95rem",
    color: "#ccc",
  },
};

export default HomePage;
