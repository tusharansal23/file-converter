import React from 'react';
import { FileIcon } from 'lucide-react';
import "../css/Header.css";
import AboutUs from "../components/AboutUs";

const Header = () => {
  return (
    <header className="header">
  <div className="header-container">
    <div className="header-inner">
      <div className="header-left">
        <FileIcon className="file-icon" />
        <span className="header-title">ConvertMaster</span>
      </div>
      <nav className="header-nav">
        <ul className="nav-list">
          <li>
            <a href="#" className="nav-link">Home</a>
          </li>
          <li>
            <a href="#" className="nav-link">Features</a>
          </li>
          <li>
            <a href="#" className="nav-link">Pricing</a>
          </li>
          <li>
            <a href="/about" className="nav-link">About Us</a>
          </li>

        </ul>
      </nav>
      <div className="header-actions">
        <button className="signup-button">Sign Up</button>
      </div>
    </div>
  </div>
</header>

  );
};

export default Header;