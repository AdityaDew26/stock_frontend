import './App.css'
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'
import { AuthProvider } from './context/AuthContext'
import Signup from "./components/auth/signup/Signup"
import Login from './components/auth/login/Login'
import Dashboard from './pages/main/Dashboard'
import PortfolioPage from './pages/portfolioPage/PortfolioPage'
import AnalyticsPage from './pages/analytics/Analytics'
import AddStocks from './components/dashboard/addStocks/AddStocks'
import UpdateProfile from './components/auth/updateProfile/UpdateProfile';


function App() {
  

  return (
    <>
     <Router>
      <Routes>
         <Route path='/' element={<Login/>}/>
        <Route path='/signup' element={<Signup/>}/>
         <Route path='/dashboard' element={<Dashboard/>}/>
          <Route path='/profileUpdate' element={
         <AuthProvider>
      <UpdateProfile />
    </AuthProvider>
        }/>
         <Route path='/portfolio' element={<PortfolioPage/>}/>
         <Route path='/analytics' element={<AnalyticsPage/>}/>
         <Route path='/add' element={<AddStocks/>}/>

      </Routes>
     </Router>
    </>
  )
}

export default App
