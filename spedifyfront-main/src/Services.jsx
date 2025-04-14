import React from 'react';
import './Services.css';

const Services = () => {
    return (
        <div className="services-content">
            <h1>Our Services</h1>
            <ul className="services-list">
                <li><strong>Product Search:</strong> Find products quickly and efficiently with our search tool.</li>
                <li><strong>Price Comparison:</strong> Compare prices across various online platforms.</li>
                <li><strong>Product Recommendations:</strong> Get recommendations based on your search history and preferences.</li>
                <li><strong>Customer Support:</strong> Access our support team for any queries or issues you may have.</li>
            </ul>
            <a href="/search" className="history-container">Go Back</a>
        </div>
        
    );
};

export default Services;
