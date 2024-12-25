import React, { useState, useEffect } from "react";
import axios from "axios";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler
} from "chart.js";

// Register necessary components for Chart.js
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler,
);

const StockChart = () => {
  const [chartData, setChartData] = useState(null);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  const fetchStockData = async () => {
    setIsLoading(true);
    try {
      const response = await axios.get(
        "https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=IBM&interval=5min&apikey=demo",
        { timeout: 10000 } // Timeout set to 10 seconds
      );
      const liveStocks = response.data["Time Series (5min)"];

      const labels = Object.keys(liveStocks).map((key) => key); // Get time labels
      const data = Object.values(liveStocks).map((value) => value["4. close"]); // Extract closing prices

      setChartData({
        labels: labels,
        datasets: [
          {
            label: "Stock Prices",
            data: data,
            borderColor: "rgba(75, 192, 192, 1)",
            backgroundColor: "rgba(75, 192, 192, 0.2)",
            fill: true,
          },
        ],
      });
      setIsLoading(false);
    } catch (err) {
      setIsLoading(false);
      if (err.code === "ERR_NETWORK") {
        setError("Network error: Unable to connect to the API. Please check your internet connection.");
      } else if (err.code === "ECONNABORTED") {
        setError("Request timed out. Please try again.");
      } else {
        setError("Error fetching live stock data. Please try again later.");
      }
      console.error("Error fetching stock data:", err);
    }
  };

  useEffect(() => {
    fetchStockData();
  }, []);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return <Line data={chartData} />;
};

export default StockChart;
