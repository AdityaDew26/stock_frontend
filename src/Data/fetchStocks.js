// src/utils/fetchStocks.js
import axios from "axios";

const fetchStocks = async () => {
  try {
    const response = await axios.get('http://localhost:5000/api/stocks');
    if (Array.isArray(response.data)) {
      return response.data;
    } else {
      console.error("Expected an array, but received:", response.data);
      return [];
    }
  } catch (error) {
    console.error("Error fetching stocks:", error);
    return [];
  }
};

export default fetchStocks;
