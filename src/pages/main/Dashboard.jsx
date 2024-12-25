// Dashboard.jsx
import React, { useState, useEffect } from 'react';
import './dashboard.css';
import Navbar from '../../components/dashboard/navbar/Navbar';
import videoBg from '../../assets/videoBg.mp4';
import StockContainer from '../../components/dashboard/StockContainer/StockContainer';
import About from '../../components/dashboard/about/About';
import Footer from '../../components/dashboard/footer/Footer';

// Import API functions
import { fetchWatchlist, fetchPortfolio, fetchTransactions } from '../../api/dashboardApi';

function Dashboard() {
  const [watchlist, setWatchlist] = useState([]);
  const [portfolio, setPortfolio] = useState([]);
  const [transactions, setTransactions] = useState([]);

  // Fetch data for watchlist, portfolio, and transactions
  const fetchData = async () => {
    const watchlistData = await fetchWatchlist();
    const portfolioData = await fetchPortfolio();
    const transactionsData = await fetchTransactions();

    setWatchlist(watchlistData);
    setPortfolio(portfolioData);
    setTransactions(transactionsData);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="dashboard">
      <Navbar />
      <div className="image-background">
        <video src={videoBg} muted loop autoPlay>
          Your browser does not support the video tag.
        </video>
        <h1>Unlock the Market Potential</h1>
      </div>
      <div className="dashboard-sections">
        <section className="section">
          <h2>Watchlist</h2>
          <ul>
            {watchlist.map((stock, index) => (
              <li key={index}>
                {stock.name} ({stock.symbol.toUpperCase()}) - ${stock.current_price}
              </li>
            ))}
          </ul>
        </section>

        <section className="section">
          <h2>Portfolio Tracker</h2>
          <ul>
            {portfolio.map((stock, index) => (
              <li key={index}>
                {stock.symbol.toUpperCase()} - Quantity: {stock.quantity} - Value: ${stock.value}
              </li>
            ))}
          </ul>
        </section>

        <section className="section">
          <h2>Transaction History</h2>
          <ul>
            {transactions.map((transaction, index) => (
              <li key={index}>
                {transaction.type} {transaction.symbol.toUpperCase()} - {transaction.quantity} at ${transaction.price}
              </li>
            ))}
          </ul>
        </section>
      </div>
      <StockContainer />
      <About />
      <Footer/>
    </div>
  );
}

export default Dashboard;
