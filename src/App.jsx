import './App.css';
import axios from 'axios';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import { useState, useEffect } from 'react';  // Corrected: Importing useState and useEffect
import Signup from "./components/auth/signup/Signup";
import Login from './components/auth/login/Login';
import Dashboard from './pages/main/Dashboard';
import PortfolioPage from './pages/portfolioPage/PortfolioPage';
import AnalyticsPage from './pages/analytics/Analytics';
import AddStocks from './components/dashboard/addStocks/AddStocks';
import UpdateProfile from './components/auth/updateProfile/UpdateProfile';

function App() {

  const [data, setData] = useState(null);  // Corrected: Missing useState hook

  useEffect(() => {
    axios.get('https://stock-backend-grzq.onrender.com/api/endpoint')
      .then(response => setData(response.data))
      .catch(error => console.error('Error:', error));
  }, []);

  return (
    <>
      {data ? <pre>{JSON.stringify(data, null, 2)}</pre> : <p>Loading...</p>}
      <Router>
        <Routes>
          <Route path='/' element={<Login />} />
          <Route path='/signup' element={<Signup />} />
          <Route path='/dashboard' element={<Dashboard />} />
          <Route path='/profileUpdate' element={
            <AuthProvider>
              <UpdateProfile />
            </AuthProvider>
          } />
          <Route path='/portfolio' element={<PortfolioPage />} />
          <Route path='/analytics' element={<AnalyticsPage />} />
          <Route path='/add' element={<AddStocks />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
