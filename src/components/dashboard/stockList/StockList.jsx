import React, { useState, useEffect } from "react";
import axios from "axios";
import "./list.css";

function StockList({ setPortfolio }) {
  const [stocks, setStocks] = useState([]);
  const [error, setError] = useState(null);

  const fetchStocks = async () => {
    try {
      const response = await axios.get("http://localhost:5000/api/stocks/getStockData");
      if (response.data && Array.isArray(response.data)) {
        setStocks(response.data);
      } else {
        setError("No stocks found.");
      }
    } catch (err) {
      setError("Error fetching stocks.");
      console.error(err);
    }
  };

  useEffect(() => {
    fetchStocks();
  }, []);


  const handleBuy = (stock) => {
    setPortfolio((prevPortfolio) => {
      const updatedPortfolio = [...prevPortfolio];
      const stockIndex = updatedPortfolio.findIndex(
        (s) => s.symbol === stock.symbol
      );

      if (stockIndex !== -1) {
        updatedPortfolio[stockIndex].quantity += 1;
      } else {
        updatedPortfolio.push({ ...stock, quantity: 1 });
      }

      return updatedPortfolio;
    });
  };

  const handleSell = (stock) => {
    setPortfolio((prevPortfolio) => {
      const updatedPortfolio = [...prevPortfolio];
      const stockIndex = updatedPortfolio.findIndex(
        (s) => s.symbol === stock.symbol
      );

      if (stockIndex !== -1 && updatedPortfolio[stockIndex].quantity > 0) {
        updatedPortfolio[stockIndex].quantity -= 1;
        alert(`${stock.symbol} has been sold`);
      } else {
        alert("You don't own this stock or have no quantity left to sell");
      }

      return updatedPortfolio;
    });
  };

  if (error) {
    return <div>{error}</div>;
  }

  if (!stocks || stocks.length === 0) {
    return <div>Loading...</div>;
  }

  return (
    <div className="list-container">
      <div className="stock-table">
        <h3>Live Stocks </h3>
        <table>
          <thead>
            <tr>
              <th>Symbol</th>
              <th>Company Name</th>
              <th>Price</th>
              <th>Volume</th>
              <th>Market Cap</th>
              <th>Sector</th>
              <th>Industry</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {stocks.map((stock) => (
              <tr key={ stock.id || stock.symbol}>
                <td>{stock.symbol}</td>
                <td>{stock.companyName}</td>
                <td>{stock.price ? `$${stock.price}` : "Loading..."}</td>
                <td>{stock.volume}</td>
                <td>{stock.marketCap}</td>
                <td>{stock.sector}</td>
                <td>{stock.industry}</td>
                <td>
                  <button onClick={() => handleBuy(stock)}>Buy</button>
                  <button onClick={() => handleSell(stock)}>Sell</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default StockList;
