import React from 'react';
import './footer.css';
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from 'react-icons/fa';

function Footer() {
  return (
    <div className="footer">
      {/* Footer Top Section */}
      <div className="footer-top">
        <h2 style={{color:"skyblue"}}>StockTracker</h2>
        <div className="footer-description">
          <p>
            Stay ahead with StockTracker. Your one-stop platform to track stock prices, get real-time market data, and make informed investment decisions. Join thousands of users who rely on our platform to stay updated and enhance their trading strategies.
          </p>
        </div>
      </div>

      {/* Footer Links Section */}
      <div className="footer-links">
        <a href="/home">Home</a>
        <a href="/about">About</a>
        <a href="/contact">Contact</a>
        <a href="/privacy">Privacy Policy</a>
        <a href="/terms">Terms of Service</a>
      </div>

      {/* Footer Socials Section */}
      <div className="footer-socials">
        <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
          <FaFacebook />
        </a>
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
          <FaTwitter />
        </a>
        <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
          <FaLinkedin />
        </a>
        <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
          <FaInstagram />
        </a>
      </div>

      {/* Footer Bottom Section */}
      <div className="footer-bottom">
        <p>&copy; 2024 StockTracker. All rights reserved.</p>
      </div>
    </div>
  );
}

export default Footer;
