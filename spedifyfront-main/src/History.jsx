import React, { useState, useEffect } from 'react';
import './History.css';

const History = () => {
    // State to hold the search history
    const [history, setHistory] = useState([]);

    // Load history from localStorage when component mounts
    useEffect(() => {
        const savedHistory = JSON.parse(localStorage.getItem('searchHistory')) || [];
        setHistory(savedHistory);
    }, []);

    // Add search item to history and save it to localStorage
    const addSearchToHistory = (searchTerm) => {
        const newHistory = [...history, searchTerm];
        setHistory(newHistory);
        localStorage.setItem('searchHistory', JSON.stringify(newHistory));
    };

    // Clear history
    const clearHistory = () => {
        setHistory([]);
        localStorage.removeItem('searchHistory');
    };

    return (
        <div className="history-container">
            <h2>Search History</h2>
            <button onClick={clearHistory}>Clear History</button>
            {history.length > 0 ? (
                <ul>
                    {history.map((item, index) => (
                        <li key={index}>{item}</li>
                    ))}
                </ul>
            ) : (
                <p>No search history available</p>
            )}
            <a href="/search" className="history-container">Go Back</a>
        </div>
    );
};

export default History;
