import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './portfolio.css';

const Portfolio = () => {
  const [portfolioData, setPortfolioData] = useState([]);
  const [error, setError] = useState(null);
  const token = localStorage.getItem('token');

  useEffect(() => {
    const fetchPortfolio = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/portfolio/getPortfolio', {
          headers: { Authorization: `Bearer ${token}` },
        });
        if (Array.isArray(response.data)) {
          setPortfolioData(response.data);
        } else {
          setError('Invalid portfolio data format');
        }
      } catch (error) {
        setError('Error fetching portfolio data');
      }
    };

    if (token) {
      fetchPortfolio();
    } else {
      setError('No token found');
    }
  }, [token]);

  return (
    <div className="portfolio-box">
      <h1>Portfolio</h1>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <div>
        <h2>Portfolio List</h2>
        <ul>
          {Array.isArray(portfolioData) &&
            portfolioData.map((item) => (
              <li key={item.id}>
                <strong>{item.title}</strong>: {item.description}
              </li>
            ))}
        </ul>
      </div>
    </div>
  );
};

export default Portfolio; // Ensure this is a default export
