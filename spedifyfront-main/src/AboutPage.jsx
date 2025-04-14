import React from "react";
import "./AboutPage.css"; 

const About = () => {
  return (
    <div className="about-container">
      <h1>About Us</h1>
      <p>
        Welcome to Spedify, your trusted partner in finding the best deals
        online. We understand that with countless e-commerce platforms,
        locating the best price for your desired product can be overwhelming.
        That’s where we come in.
      </p>
      <p>
        Our intelligent platform simplifies your shopping experience by
        instantly comparing prices across multiple platforms. Whether you're
        searching for the latest smartphone or everyday essentials, we do the
        legwork to present you with the most affordable options. Just enter
        the product you're looking for, and our model will find the platform
        offering the lowest price.
      </p>
      <p>
        At Spedify, our mission is to save you time and money, ensuring you
        never miss out on the best deal. Start your smarter shopping journey
        with us and make every purchase count.
      </p>
      <a href="/" className="home-button">
        Back to Home
      </a>
    </div>
  );
};

export default About;
