import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Homepage from './HomePage';
import About from './AboutPage';
import Product from './ProductsPage';
import Register from './Register';
import Login from './Login';
import Search from './SearchPage'
import ResultsPage from './ResultsPage';
import History from './History';
import Services from './Services';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Homepage />} /> 
        <Route path="/about" element={<About />} />
        <Route path="/product" element={<Product />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/search" element={<Search />} />
        <Route path="/results" element={<ResultsPage />} />
        <Route path="/history" element={<History />} />
        <Route path="/services" element={<Services />} />
      </Routes>
    </Router>
  );
}

export default App;
