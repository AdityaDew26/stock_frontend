import { useState, useEffect } from "react";
import axios from "axios";
import StockChart from "../../components/dashboard/stockChart/StockChart";
import StockList from "../../components/dashboard/stockList/StockList";

function AnalyticsPage() {
  const [stocks, setStocks] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchStocks = async () => {
      try {
        const response = await axios.get(
          "https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=IBM&interval=5min&apikey=demo"
        );
        const liveStocks = response.data;
        setStocks(liveStocks);
        setIsLoading(false);
      } catch (err) {
        setError("Error fetching stock data. Please try again later.");
        setIsLoading(false);
      }
    };

    fetchStocks();
  }, []);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div>
      <StockChart stocks={stocks} />
      <StockList stocks={stocks} />
    </div>
  );
}

export default AnalyticsPage;
