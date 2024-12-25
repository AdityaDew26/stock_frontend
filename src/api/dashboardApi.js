// api.js
import axios from 'axios';

export const fetchWatchlist = async () => {
  try {
    const response = await axios.get('https://api.coingecko.com/api/v3/coins/markets', {
      params: {
        vs_currency: 'usd',
        ids: 'bitcoin,ethereum', // Example of symbols to track in the watchlist
      },
    });
    return response.data;
  } catch (error) {
    console.error("Error fetching watchlist:", error);
    return [];
  }
};

export const fetchPortfolio = async () => {
  // For demonstration, we'll return static data. You can replace this with actual logic for your portfolio.
  return [
    {
      symbol: 'bitcoin',
      quantity: 1.5,
      value: 45000, // Value in USD
    },
    {
      symbol: 'ethereum',
      quantity: 10,
      value: 3000, // Value in USD
    },
  ];
};

export const fetchTransactions = async () => {
  // For demonstration, we'll return static data. You can replace this with actual transaction data.
  return [
    {
      type: 'Buy',
      symbol: 'bitcoin',
      quantity: 1,
      price: 40000, // Price per unit
    },
    {
      type: 'Sell',
      symbol: 'ethereum',
      quantity: 5,
      price: 2500, // Price per unit
    },
  ];
};
