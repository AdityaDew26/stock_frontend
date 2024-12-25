import axios from 'axios';

const API_BASE_URL = 'http://localhost:5000/api/portfolio';

export const addStock = async (stockData, token) => {
  const response = await axios.post(`${API_BASE_URL}/add-stock`, stockData, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return response.data;
};

export const removeStock = async (stockSymbol, token) => {
  const response = await axios.delete(`${API_BASE_URL}/remove-stock/${stockSymbol}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return response.data;
};

export const getPortfolio = async () => {
    try {
        const response = await fetch('/api/portfolio');
        if (!response.ok) {
            throw new Error('Failed to fetch portfolio data');
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error fetching portfolio data:', error);
        throw error;
    }
};
