import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import axios from 'axios';
import './ResultsPage.css';

const ResultsPage = () => {
    const [results, setResults] = useState([]);
    const [filteredResults, setFilteredResults] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [showLeastCostly, setShowLeastCostly] = useState(false);
    const location = useLocation();

    const { query } = location.state || {};

    useEffect(() => {
        const fetchResults = async () => {
            if (query) {
                setLoading(true);
                setError(null);
                try {
                    const response = await axios.post('http://localhost:5000/api/search', { query });
                    setResults(response.data);
                    setFilteredResults(response.data);
                } catch (err) {
                    setError('Error fetching product data.');
                } finally {
                    setLoading(false);
                }
            }
        };

        fetchResults();
    }, [query]);

    const showLeastCostlyItems = () => {
        const amazonProducts = results.filter(product => product.link.includes('amazon'));
        const flipkartProducts = results.filter(product => product.link.includes('flipkart'));

        const leastCostlyAmazon = amazonProducts.reduce((min, product) => {
            const price = parseFloat(product.price.replace(/[^0-9.-]+/g, ''));
            return price < min.price ? { ...product, price } : min;
        }, { price: Infinity });

        const leastCostlyFlipkart = flipkartProducts.reduce((min, product) => {
            const price = parseFloat(product.price.replace(/[^0-9.-]+/g, ''));
            return price < min.price ? { ...product, price } : min;
        }, { price: Infinity });

        setFilteredResults([leastCostlyAmazon, leastCostlyFlipkart]);
        setShowLeastCostly(true);
    };

    const showAllItems = () => {
        setFilteredResults(results);
        setShowLeastCostly(false);
    };

    return (
        <div>
            <header>
                <img src="Logo.png" alt="Logo" />
                <h1>Spedify</h1>
                <nav>
                    <a href="/">Home</a>
                    <a href="/history">History</a>
                    <a href="/services">Services</a>
                </nav>
            </header>
            

            <hr />
            <div className="content">
                <button onClick={showLeastCostly ? showAllItems : showLeastCostlyItems} className="toggle-button">
                    {showLeastCostly ? 'Show All Items' : 'Show Least Costly Item from Each Website'}
                </button>
                {loading && <p>Loading...</p>}
                {error && <p>{error}</p>}

                {filteredResults.length > 0 ? (
                    <ul className="results-list">
                        {filteredResults.map((product, index) => (
                            <li key={index} className="result-item">
                                <img className="product-image" src={product.image_url || 'default-image.jpg'} alt={product.title} />
                                <div className="product-info">
                                    <a href={product.link} target="_blank" rel="noopener noreferrer" className="product-name">
                                        {product.title}
                                    </a>
                                    <p className="product-price">{product.price}</p>
                                </div>
                            </li>
                        ))}
                    </ul>
                ) : (
                    
                    <div className="no-results">
                        <p></p>
                    </div>
                )}
            </div>
            
        </div>
    );
};

export default ResultsPage;
