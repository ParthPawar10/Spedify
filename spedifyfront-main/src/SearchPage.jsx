import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './SearchPage.css';

const SearchPage = () => {
    const [history, setHistory] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const navigate = useNavigate();

    // Load history from localStorage on component mount
    useEffect(() => {
        const savedHistory = JSON.parse(localStorage.getItem('searchHistory')) || [];
        setHistory(savedHistory);
    }, []);

    // Function to save history to localStorage
    const saveHistoryToLocalStorage = (newHistory) => {
        localStorage.setItem('searchHistory', JSON.stringify(newHistory));
    };

    const showSection = (sectionId) => {
        document.querySelectorAll('.content, .history-container, .services-content').forEach((section) => {
            section.classList.add('hidden');
        });
        document.getElementById(sectionId).classList.remove('hidden');
    };

    const searchProduct = (event) => {
        event.preventDefault();
        if (searchTerm.trim()) {
            // Add new search term to history and save to localStorage
            const updatedHistory = [...history, searchTerm];
            setHistory(updatedHistory);
            saveHistoryToLocalStorage(updatedHistory);

            setSearchTerm('');

            // Navigate to ResultsPage with the search query as state
            navigate('/results', { state: { query: searchTerm } });
        }
    };

    const clearHistory = () => {
        setHistory([]);
        saveHistoryToLocalStorage([]); // Clear from localStorage as well
    };

    return (
        <div>
            <header>
                <img src="Logo.png" alt="Logo" />
                <h1>Spedify</h1>
                <nav>
                    <a href="/" onClick={() => showSection('searchSection')}>Home</a>
                    <a href="/history" onClick={() => showSection('historySection')}>History</a>
                    <a href="/services" onClick={() => showSection('servicesSection')}>Services</a>
                </nav>
            </header>

            <hr />
            <div id="searchSection" className="content">
                <h1>Search for a Product</h1>
                <p>Enter the product name below to search for details:</p>

                <form onSubmit={searchProduct}>
                    <div className="search-bar">
                        <input
                            type="text"
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            placeholder="Search for products..."
                            autoComplete="off"
                        />
                        <button type="submit">Search</button>
                    </div>
                </form>
            </div>

        </div>
    );
};

export default SearchPage;
