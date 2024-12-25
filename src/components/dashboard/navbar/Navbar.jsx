import { Link, useNavigate } from "react-router-dom"
import "./navbar.css"
import { useState } from "react"

function Navbar(){
const [dark,setDark]=useState(false)
const navigate = useNavigate()

 const userName = localStorage.getItem('name');

  const handleLogout = () => {
  
    localStorage.removeItem('token');
    localStorage.removeItem('name');

    navigate('/');
  };

const handleDark =()=>{
    setDark(!dark)

   if(!dark){
     document.body.classList.add('dark-theme', dark)
   }else{
     document.body.classList.remove('dark-theme', dark)
   }
}


    return(
        <div className="navbar">
            <div className="logo">
                <h1>LOGO</h1>
            </div>
            <nav className="nav-links">
                <ul>
                    <li><Link to="/dashboard" className="link">Dashboard</Link></li>
                    <li>
                        <Link to= '/portfolio' className="link">Portfolio</Link>
                    </li>
                    <li>
                        <Link to='/analytics' className="link">Analytics</Link>
                    </li>
                    
                </ul>
                <div className="profile">
                     {userName && <span className="user">{userName}</span>}
                    <button id="darkmode" onClick={handleDark}>{dark ? "light":"dark"}</button>
                    <button id="logout" onClick={handleLogout}>Logout</button>
                </div>
            </nav>
            
            
        </div>
    )
}

export default Navbar