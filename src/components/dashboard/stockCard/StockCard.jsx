import React from "react";
import './card.css'; // Import the CSS file for styling the stock card

function StockCard({ stock }) {
  return (
    <div className="stock-card">
      <div className="stock-image">
        <img src={stock.imageUrl} alt={stock.name} />
      </div>
      <div className="stock-details">
        <h3>{stock.name}</h3>
        <p>{stock.price}</p>
        <p className={stock.change.includes('+') ? 'positive' : 'negative'}>{stock.change}</p>
      </div>
    </div>
  );
}

export default StockCard;
