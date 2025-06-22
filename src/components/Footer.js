import React from 'react';
import { FileIcon, Github, Twitter, Facebook } from 'lucide-react';
import "../css/Footer.css";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer">
  <div className="footer-container">
    <div className="footer-grid">
      <div>
        <div className="footer-logo">
          <FileIcon className="h-6 w-6 text-blue-500" />
          <span className="footer-logo-text">ConvertMaster</span>
        </div>
        <p className="footer-text">
          Convert any file format with ease. Quick, secure, and efficient file conversion.
        </p>
        <div className="footer-icons">
          <a href="#"><Twitter className="h-5 w-5" /></a>
          <a href="#"><Facebook className="h-5 w-5" /></a>
          <a href="#"><Github className="h-5 w-5" /></a>
        </div>
      </div>
      {/* Repeat the next three blocks with .footer-section-title and .footer-links */}
    </div>
    <div className="footer-bottom">
    <p className="text-sm text-gray-500">
      © {new Date().getFullYear()} Free2PDF. All rights reserved. |
        <Link to="/terms" className="text-blue-500 hover:underline mx-1">Terms</Link> |
        <Link to="/privacy" className="text-blue-500 hover:underline mx-1">Privacy</Link> |
        <Link to="/contact" className="text-blue-500 hover:underline mx-1">Contact</Link>
    </p>
    </div>
  </div>
</footer>

  );
};

export default Footer;