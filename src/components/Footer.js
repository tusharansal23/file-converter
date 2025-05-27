import React from 'react';
import { FileIcon, Github, Twitter, Facebook } from 'lucide-react';
import "../css/Footer.css";

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
      <p>© {new Date().getFullYear()} ConvertMaster. All rights reserved.</p>
    </div>
  </div>
</footer>

  );
};

export default Footer;