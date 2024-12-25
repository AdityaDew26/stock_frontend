
import Portfolio from "../../components/dashboard/portfolio/Portfolio";
import Profile from "../../components/auth/profile/Profile"
import { AuthProvider } from "../../context/AuthContext";
import "./portfolioContainer.css"

function PortfolioPage() {
  
  return (
    <div className="porfolio-page-conatiner">
       <AuthProvider>
      <Profile />
    </AuthProvider>
      <Portfolio/>
    </div>
  );
}

export default PortfolioPage;
