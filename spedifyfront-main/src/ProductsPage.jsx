import React from 'react';
import './ProductsPage.css'; // Assuming the CSS file is named index.css

function App() {
  return (
    <div>
      <div className="features" id="features">
        <div className="feature-item">
          <h2>Electronics</h2>
          <p>
            Discover the cutting-edge world of electronics, offering a diverse selection of the latest smartphones, laptops, and smart home devices. Stay ahead of technological trends with top-of-the-line gadgets designed to improve your productivity, entertainment, and overall lifestyle. From wearables that track your health to powerful machines for gaming and work, our collection brings you the most advanced technology available. Whether you need an upgrade or are just starting to explore the tech world, we have something for everyone, making sure you're always connected to the future.
          </p>
          <img src="/electro.jpg" alt="Electronics"/>
        </div>
        <div className="feature-item">
          <h2>Cosmetics</h2>
          <p>
          Elevate your beauty routine with our exclusive range of skincare, makeup, and haircare products. Our collection includes everything from luxurious anti-aging serums to vibrant lipsticks and eye-catching makeup essentials, helping you enhance your natural beauty. Find nourishing creams for your skin, oils that rejuvenate, and tools that ensure flawless application. Our cosmetics are designed to make you feel confident, radiant, and pampered. With top-quality ingredients and expert formulations, our products cater to all skin types and needs, so you can look and feel your absolute best every day.
          </p>
          <img src="/cosme.jpg" alt="Cosmetics"/>
        </div>
        <div className="feature-item">
          <h2>Clothes</h2>
          <p>
          Transform your wardrobe with our extensive selection of stylish, comfortable, and versatile clothing for all occasions. Whether you're looking for trendy outfits to make a bold statement, timeless essentials for everyday wear, or elegant pieces for special events, we have it all. Our clothing range includes chic tops, smart trousers, cozy sweaters, and statement accessories that will elevate your fashion game. With sizes for every body type and styles that cater to every personality, we ensure you can express yourself with confidence, comfort, and flair.
          </p>
          <img src="/cloth.jpg" alt="Clothes"/>
        </div>
        <div className="feature-item">
          <h2>Groceries</h2>
          <p>
          Make grocery shopping easier and healthier with our wide variety of fresh and high-quality food items. From organic produce, whole grains, and premium meats to everyday pantry staples and snacks, we offer a vast selection to meet all your grocery needs. Whether you're planning a wholesome family meal or just stocking up on essentials, we have everything you need to maintain a balanced and nutritious diet. We also offer a range of eco-friendly household products, cleaning supplies, and beverages to keep your home running smoothly. With our commitment to quality, you can be assured that each purchase supports your health and well-being.
          </p>
          <img src="/food.jpg" alt="Groceries"/>
        </div>
      </div>
      <div class="home-button-container">
        <a href="/" class="home-button">Back to Home</a>
      </div>
    </div>
    
  );
}

export default App;
