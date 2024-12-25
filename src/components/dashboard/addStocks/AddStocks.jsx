import React, { useState, useEffect } from "react";
import axios from "axios";
import './addstocks.css';

function AddStocks() {
  const [stocks, setStocks] = useState([]);
  const [symbol, setSymbol] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [price, setPrice] = useState("");
  const [volume, setVolume] = useState("");
  const [marketCap, setMarketCap] = useState("");
  const [sector, setSector] = useState("");
  const [industry, setIndustry] = useState("");
  const [error, setError] = useState(null);

 

  const handleAddStock = async (e) => {
    e.preventDefault();
    if (!symbol || !companyName || !price || !volume || !marketCap || !sector || !industry) {
      setError("All fields are required!");
      return;
    }

    try {
      const newStock = {
        symbol,
        companyName,
        price,
        volume,
        marketCap,
        sector,
        industry,
      };

      const response = await axios.post("http://localhost:5000/api/stocks/addStockData", newStock);
      setStocks([...stocks, response.data]);
      setSymbol("");
      setCompanyName("");
      setPrice("");
      setVolume("");
      setMarketCap("");
      setSector("");
      setIndustry("");
    } catch (err) {
      setError("Error adding stock.");
    }
  };

  return (
    <div className="stock-portfolio">
      <h2>Stock Portfolio</h2>

      {error && <div className="error">{error}</div>}

      <form onSubmit={handleAddStock} className="stock-form">
        <div className="form-group">
          <label>Symbol:</label>
          <input type="text" value={symbol} onChange={(e) => setSymbol(e.target.value)} />
        </div>
        <div className="form-group">
          <label>Company Name:</label>
          <input type="text" value={companyName} onChange={(e) => setCompanyName(e.target.value)} />
        </div>
        <div className="form-group">
          <label>Price:</label>
          <input type="number" value={price} onChange={(e) => setPrice(e.target.value)} />
        </div>
        <div className="form-group">
          <label>Volume:</label>
          <input type="number" value={volume} onChange={(e) => setVolume(e.target.value)} />
        </div>
        <div className="form-group">
          <label>Market Cap:</label>
          <input type="number" value={marketCap} onChange={(e) => setMarketCap(e.target.value)} />
        </div>
        <div className="form-group">
          <label>Sector:</label>
          <input type="text" value={sector} onChange={(e) => setSector(e.target.value)} />
        </div>
        <div className="form-group">
          <label>Industry:</label>
          <input type="text" value={industry} onChange={(e) => setIndustry(e.target.value)} />
        </div>
        <button type="submit" className="add-btn">Add Stock</button>
      </form>
    </div>
  );
}

export default AddStocks;
